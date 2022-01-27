import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ iPData, isLoading }) => {
    const [geoData, setGeoData] = useState({ lat: null, lng: null })

    const lat = iPData?.location?.lat
    const lng = iPData?.location?.lng

    useEffect(() => {
        setGeoData({ lat, lng })
    }, [lat, lng])

    return (
        <>
            {!isLoading && geoData.lat && geoData.lng && (
                <div className="map">
                    <MapContainer
                        style={{ height: '100%', width: '100%' }}
                        center={[lat, lng]}
                        zoom={13}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {geoData.lat && geoData.lng && (
                            <Marker position={[lat, lng]}>
                                <Popup>
                                    {iPData?.location?.city},
                                    {iPData?.location?.region}
                                    <br />
                                    {iPData?.location?.postalCode}
                                </Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </div>
            )}
        </>
    )
}

export default Map
