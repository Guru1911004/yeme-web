'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ isDark: false, toggle: () => {} })

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false)

    // Read saved preference on mount
    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const dark = saved ? saved === 'dark' : prefersDark
        setIsDark(dark)
        document.documentElement.classList.toggle('dark', dark)
    }, [])

    const toggle = () => {
        setIsDark(prev => {
            const next = !prev
            localStorage.setItem('theme', next ? 'dark' : 'light')
            document.documentElement.classList.toggle('dark', next)
            return next
        })
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
