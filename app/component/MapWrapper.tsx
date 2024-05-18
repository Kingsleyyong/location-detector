import { CSSProperties, useEffect, useState } from 'react'
import { PositionCoordinate } from '../globalTypes'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'

interface IMapWrapper {
    coor: PositionCoordinate
    style: CSSProperties
}

const MapWrapper = ({ coor, style }: IMapWrapper) => {
    return (
        <div className="h-3/4 w-4/5">
            <APIProvider apiKey={process.env.GOOGLE_API_KEY ?? ''}>
                <GoogleMap
                    style={style}
                    defaultCenter={{ lat: coor.latitude, lng: coor.longitude }}
                    defaultZoom={15}
                />
            </APIProvider>
        </div>
    )
}

export default MapWrapper
