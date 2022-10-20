/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                brightRed: 'rgb(248 113 113)',
                brightOrange: 'rgb(251 146 60)',
                brightYellow: 'rgb(250 204 21)',
                brightLime: 'rgb(163 230 53)',
                brightGreen: 'rgb(74 222 128)',
                brightCyan: 'rgb(34 211 238',
                brightBlue: 'rgb(37 99 235)',
                brightGray: 'rgb(156 163 175)',
            }
        },
    },
    plugins: [],
}