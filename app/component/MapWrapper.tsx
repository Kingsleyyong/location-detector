import { CSSProperties, useEffect, useState } from 'react'
import { MapType, PositionCoordinate } from '../globalTypes'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'
import { Map as AppleMap, Marker } from 'mapkit-react'

interface IMapWrapper {
    coor: PositionCoordinate
    style: CSSProperties
}

const MapWrapper = ({ coor, style }: IMapWrapper) => {
    const [mapType, setMapType] = useState<MapType>()

    useEffect(() => {
        if (mapType !== undefined) return

        if (!/Safari/.test(navigator.userAgent)) {
            setMapType(MapType.APPLE_MAP)
        } else setMapType(MapType.GOOGLE_MAP)
    }, [mapType])

    return (
        <div className="h-20">
            <APIProvider apiKey={process.env.GOOGLE_API_KEY ?? ''}>
                <GoogleMap
                    style={style}
                    defaultCenter={{ lat: coor.latitude, lng: coor.longitude }}
                    defaultZoom={3}
                />
            </APIProvider>
        </div>
    )
}

export default MapWrapper
