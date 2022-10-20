/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            ls: '280',
            s: '350px',
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {

        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss')
    ],
};