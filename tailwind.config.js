// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "from-purple-600",
    "to-blue-500",
    "from-cyan-500",
    "from-green-400",
    "to-blue-600",
    "from-purple-500",
    "to-pink-500",
    "from-pink-500",
    "to-orange-400",
    "from-teal-300",
    "to-lime-300",
    "from-red-200",
    "via-red-300",
    "to-yellow-200",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
