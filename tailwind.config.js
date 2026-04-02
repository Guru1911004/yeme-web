/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                yeme: {
                    purple: '#3B266F',
                    'purple-light': '#4e318f',
                    'purple-dim': 'rgba(59,38,111,0.15)',
                    blue: '#49BFFF',
                    'blue-dim': 'rgba(73,191,255,0.12)',
                },
                dark: {
                    DEFAULT: '#F8F7FB',
                    2: '#EEF2FF',
                    3: '#E4E8FC',
                },
            },
            fontFamily: {
                yeme: ['YemeMedium', 'sans-serif'],
                'yeme-bold': ['YemeBold', 'sans-serif'],
                sans: ['YemeMedium', 'sans-serif'],
            },
            borderColor: {
                DEFAULT: 'rgba(255,255,255,0.08)',
            },
        },
    },
    plugins: [],
}