import React, { useState } from 'react'
import arrowIcon from '../starter-files/images/icon-arrow.svg'
import Tracker from './Tracker'

const Header = ({
    searchInput,
    setSearchInput,
    onSubmitHandler,
    iPData,
    isLoading,
}) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            <header className="header">
                <h2 className="header__intro">IP address tracker</h2>
                <form className="header__form">
                    <p className={isClicked ? 'show-prev-text' : 'prev-text'}>
                        {isClicked && iPData?.ip ? iPData?.ip : ''}
                    </p>
                    <input
                        type="text"
                        placeholder="Search for any IP address or domain"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setIsClicked(true)}
                        onBlur={() => setIsClicked(false)}
                    />
                    <button type="button" onClick={onSubmitHandler}>
                        <img src={arrowIcon} alt="Right arrow icon" />
                    </button>
                </form>
            </header>

            <Tracker iPData={iPData} isLoading={isLoading} />
        </>
    )
}

export default Header
