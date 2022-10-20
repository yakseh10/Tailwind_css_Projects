/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {},
    },
    plugins: [require("tailwindcss-font-variant-numeric")],
};