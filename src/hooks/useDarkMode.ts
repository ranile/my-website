import { useEffect, useState } from "react"

const useDarkMode = (): [boolean, (value: boolean) => void] => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true)
    const setEnabled = (value: boolean) => { 
        if (value) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.removeItem('theme')
        }
        setIsDarkModeEnabled(value) 
    }

    useEffect(() => {
        const enabled = localStorage.getItem('theme') === 'dark'
        const classes = document.querySelector('html').classList
        setEnabled(enabled)
        if (enabled) {
            classes.add('dark')
        } else {
            classes.remove('dark')
        }
    }, [isDarkModeEnabled])

    return [isDarkModeEnabled, setEnabled]
}

export default useDarkMode