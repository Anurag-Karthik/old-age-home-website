import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream": "#faf6ef",
        "cream-100": "#ffffff",
        "cream-200": "#fefcf9",
        "cream-300": "#fcfaf4",
        "cream-400": "#fbf8f1",
        "cream-500": "#faf6ef",
        "cream-600": "#e6e2dc",
        "cream-700": "#c9c6c0",
        "cream-800": "#a5a29c",
        "cream-900": "#7a7772",

        "seafoam": "#9fe2bf",
        "seafoam-100": "#edf9f3",
        "seafoam-200": "#dbf4e8",
        "seafoam-300": "#c7eddc",
        "seafoam-400": "#b3e8cf",
        "seafoam-500": "#9fe2bf",
        "seafoam-600": "#86d4aa",
        "seafoam-700": "#6cc295",
        "seafoam-800": "#4fae7d",
        "seafoam-900": "#368e63",

        "peach": "#e7b8a0",
        "peach-100": "#fbf1ec",
        "peach-200": "#f6e3d9",
        "peach-300": "#f0d2c4",
        "peach-400": "#ebc4b1",
        "peach-500": "#e7b8a0",
        "peach-600": "#d3a58f",
        "peach-700": "#b88d79",
        "peach-800": "#96705f",
        "peach-900": "#6e5145",

        "text": "#4a4a45",
        "text-100": "#f1f1ef",
        "text-200": "#dcdcd8",
        "text-300": "#c6c6c2",
        "text-400": "#a9a9a4",
        "text-500": "#8c8c86",
        "text-600": "#6f6f69",
        "text-700": "#5a5a55",
        "text-800": "#4a4a45",
        "text-900": "#2f2f2c",

        "surface": "#ffffff",
        "surface-100": "#ffffff",
        "surface-200": "#f8f8f8",
        "surface-300": "#f2f2f2",
        "surface-400": "#ebebeb",
        "surface-500": "#e4e4e4",
        "surface-600": "#cfcfcf",
        "surface-700": "#b3b3b3",
        "surface-800": "#8f8f8f",
        "surface-900": "#6b6b6b",
      },
    },
  },
  plugins: [],
};

export default config;
