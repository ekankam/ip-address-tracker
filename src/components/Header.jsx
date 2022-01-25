import React, { useState } from 'react'
import arrowIcon from '../starter-files/images/icon-arrow.svg'

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    return (
        <header className="header">
            <h2 className="header__intro">IP address tracker</h2>
            <form className="header__form">
                <p className="prev-text">192.956.321.111</p>
                <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="button">
                    <img src={arrowIcon} alt="Right arrow icon" />
                </button>
            </form>
        </header>
    )
}

export default Header
