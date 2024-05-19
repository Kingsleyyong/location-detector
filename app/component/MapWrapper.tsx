import { CSSProperties, useEffect, useMemo } from 'react'
import { PositionCoordinate } from '../globalTypes'
import {
    APIProvider,
    Map as GoogleMap,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from '@vis.gl/react-google-maps'
import colors from 'tailwindcss/colors'
import Loading from '../dashboard/Loading'

interface IMapWrapper {
    className: string
    coor: PositionCoordinate | undefined
    handleCloseInfoWindow: () => void
    style?: CSSProperties
}

const MapWrapper = ({
    className,
    coor,
    handleCloseInfoWindow,
}: IMapWrapper) => {
    const position = useMemo(
        () => ({ lat: coor?.latitude ?? 0, lng: coor?.longitude ?? 0 }),
        [coor?.latitude, coor?.longitude]
    )

    if (
        coor === undefined ||
        coor.latitude === undefined ||
        coor.longitude === undefined
    )
        return <Loading />

    return (
        <div className={`${className} h-3/4 w-4/5  py-4`}>
            <APIProvider apiKey={process.env.GOOGLE_API_KEY ?? ''}>
                <GoogleMap
                    defaultCenter={position}
                    defaultZoom={19}
                    mapId={process.env.GOOGLE_MAP_ID ?? ''}
                >
                    <AdvancedMarker position={position}>
                        <Pin
                            background={colors.cyan['300']}
                            glyphColor={colors.cyan['900']}
                            borderColor={colors.cyan['900']}
                        />
                    </AdvancedMarker>

                    {coor.errorMessage && (
                        <InfoWindow
                            minWidth={10}
                            position={position}
                            onClose={handleCloseInfoWindow}
                        >
                            <span className="text-lg font-medium text-black">
                                {coor.errorMessage}
                            </span>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </APIProvider>
        </div>
    )
}

export default MapWrapper
