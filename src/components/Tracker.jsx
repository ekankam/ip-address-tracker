import React from 'react'

const Tracker = ({ iPData, isLoading }) => {
    if (isLoading) return <h2>Loading...</h2>
    return (
        <>
            {!isLoading && (
                <div className="tracker">
                    <div className="tracker__content ">
                        <h4 className="title">Ip address</h4>
                        <p className="info">{iPData?.ip}</p>
                    </div>
                    <div className="tracker__content border">
                        <h4 className="title">location</h4>
                        <p className="info">
                            {`${iPData?.location?.city || 'No data'}`},
                            {iPData?.location?.region}
                        </p>
                        <p className="info">{iPData?.location?.postalCode}</p>
                    </div>
                    <div className="tracker__content border">
                        <h4 className="title">timezone</h4>
                        <p className="info">
                            {`UTC ${
                                iPData?.location?.timezone || ' - No data'
                            }`}
                        </p>
                    </div>
                    <div className="tracker__content">
                        <h4 className="title">isp</h4>
                        <p className="info">{iPData?.isp}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Tracker
