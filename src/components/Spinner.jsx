import React from 'react'

const Spinner = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="spinner">
                    <div className="spinner__circle"></div>
                    <p className="spinner__message">Loading IP Data...</p>
                </div>
            )}
        </>
    )
}

export default Spinner
