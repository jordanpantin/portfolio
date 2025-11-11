/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,ts,jsx,tsx}',
        './public/**/*.html',
    ],
    safelist: [
        // badge color classes
        'badge-primary',
        'badge-secondary',
        'badge-accent',
        'badge-info',
        'badge-success',
        'badge-warning',
        'badge-error',
        // common badge sizes and shapes
        'badge-sm',
        'badge-md',
        'badge-lg',
        'badge-outline'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            'light',
            'dark',
            'cupcake',
            'corporate',
            'synthwave',
        ],
    },
};
