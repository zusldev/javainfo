/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: "320px",
            // => @media (min-width: 320px) { ... }
            md: "640px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
            xxl: "1536",
            // => @media (min-width: 1536px) { ... }
        },
        backdropFilter: {
            none: "none",
            blur: "blur(20px)",
        },
    },
    plugins: [require("tailwindcss-filters")],
};
