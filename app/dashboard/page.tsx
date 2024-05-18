'use client'

import { useEffect, useState } from 'react'
import { PositionCoordinate } from '../globalTypes'
import MapWrapper from '../component/MapWrapper'

const Dashboard = () => {
    const [positionCoords, setPositionCoords] = useState<PositionCoordinate>({
        latitude: 0,
        longitude: 0,
    })

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
        <div>
            {positionCoords?.latitude}, {positionCoords?.longitude}
            <MapWrapper coor={positionCoords} style={{}} />
        </div>
    )
}

export default Dashboard
