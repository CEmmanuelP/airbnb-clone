module.exports = {
    mode: "jit",
    // These paths are just examples, customize them to match your project structure
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ff385c",
            },
        },
    },
    plugins: [require("tailwindcss-elevation")(["responsive"])],
};
