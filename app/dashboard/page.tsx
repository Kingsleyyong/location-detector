'use client'

import { useEffect, useState } from 'react'
import MapWrapper from '../component/MapWrapper'
import { PositionCoordinate } from '../globalTypes'
import { useSession, signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('api/auth/signin?callbackUrl=/')
        },
    })

    const [positionCoords, setPositionCoords] = useState<PositionCoordinate>()

    const locationErrorHandling = (browserGeolocationAPI: boolean) => {
        setPositionCoords({
            latitude: 0,
            longitude: 0,
            errorMessage: browserGeolocationAPI
                ? 'Error: The Geolocation service failed.'
                : "Error: Your browser doesn't support geolocation.",
        })
    }

    useEffect(() => {
        const locationAPI = navigator.geolocation

        if (locationAPI) {
            locationAPI.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords
                    setPositionCoords({ latitude, longitude })
                },
                () => locationErrorHandling(true)
            )
        } else locationErrorHandling(false)
    }, [])

    return (
        <div className="flex h-full w-full flex-col items-center">
            <div className="flex h-20 w-full grow-0 items-center justify-between rounded-b-lg  bg-gray-500/60 p-3">
                <span className="h-min text-xs sm:text-sm md:text-2xl lg:text-3xl">
                    Welcome! {session?.user?.name}
                </span>

                <button
                    className="rounded-lg bg-gray-800 px-2 py-3 text-xs hover:bg-gray-600 sm:px-5 sm:text-lg md:px-5 md:text-lg lg:px-4 "
                    onClick={() => (session ? signOut() : signIn())}
                >
                    {session ? 'Sign Out' : 'Sign In'}
                </button>
            </div>

            <MapWrapper
                coor={positionCoords}
                className="grow"
                handleCloseInfoWindow={() =>
                    setPositionCoords(
                        (prev) =>
                            prev && {
                                ...prev,
                                errorMessage: undefined,
                            }
                    )
                }
            />
        </div>
    )
}

export default Dashboard
