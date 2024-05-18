'use client'

import { useEffect, useState } from 'react'
import { PositionCoordinate } from '../globalTypes'
import MapWrapper from '../component/MapWrapper'

const Dashboard = () => {
    const [positionCoords, setPositionCoords] = useState<PositionCoordinate>()

    const locationErrorHandling = (browserGeolocationAPI: boolean) => {
        console.log(
            browserGeolocationAPI
                ? 'Error: The Geolocation service failed.'
                : "Error: Your browser doesn't support geolocation."
        )
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
        <div className="flex h-full w-full flex-col items-center justify-center">
            {positionCoords && <MapWrapper coor={positionCoords} style={{}} />}
        </div>
    )
}

export default Dashboard
