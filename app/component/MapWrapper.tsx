import { CSSProperties, useEffect, useState } from 'react'
import { PositionCoordinate } from '../globalTypes'
import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps'

interface IMapWrapper {
    className: string
    coor: PositionCoordinate
    style?: CSSProperties
}

const MapWrapper = ({ className, coor }: IMapWrapper) => {
    return (
        <div className={`${className} h-3/4 w-4/5 py-4`}>
            <APIProvider apiKey={process.env.GOOGLE_API_KEY ?? ''}>
                <GoogleMap
                    defaultCenter={{
                        lat: coor.latitude,
                        lng: coor.longitude,
                    }}
                    defaultZoom={15}
                />
            </APIProvider>
        </div>
    )
}

export default MapWrapper
