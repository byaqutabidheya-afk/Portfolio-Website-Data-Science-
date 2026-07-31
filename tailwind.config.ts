import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                mint: "#c5f5d5",
                pink: "#f5c5e5",
                purple: "#a78bfa",
                "text-body": "#e5e5e5",
            },
            fontFamily: {
                display: ["var(--font-display)", "sans-serif"],
                body: ["var(--font-body)", "serif"],
                ui: ["var(--font-ui)", "sans-serif"],
            },
        },
    },
    plugins: []
};

export default config;