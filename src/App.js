import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'

const App = () => {
    const [iPData, setIPData] = useState({})
    const [searchInput, setSearchInput] = useState('')
    const [clientIP, setClientIP] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // Get client's IP Adress
    useEffect(() => {
        const getClientIpAddress = async () => {
            const response = await fetch('https://api64.ipify.org/?format=json')
            const data = await response.json()
            setClientIP(data.ip)
        }

        getClientIpAddress()
    }, [])

    // Get client's IP Adress on first page load
    useEffect(() => {
        const fetchClientIPAddress = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(
                    `
                    https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${clientIP}
                    `
                )

                const data = await response.json()

                if (response.ok) {
                    setIPData({ ...data })
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchClientIPAddress()
    }, [clientIP])

    // Get IP Address information based on user search
    const onSubmitHandler = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `
                https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${searchInput}
                `
            )
            const data = await response.json()
            if (response.ok) {
                setIPData({ ...data })
                setIsLoading(false)
                setSearchInput('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="app">
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onSubmitHandler={onSubmitHandler}
                iPData={iPData}
                isLoading={isLoading}
            />

            <Map />
        </div>
    )
}

export default App
