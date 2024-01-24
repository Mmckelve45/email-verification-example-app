/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // sharkBlue: "#3f7eac",
        sharkBlue: "#38b6ff",
        sharkDarkBlue: "#2a4863",
        sharkBlack: "#1f2d37",
        sharkBlueGray: "#a4c8e1",
        sharkTeal: "#5ce1e6",
        Accessories_Gadgets: "#FF4F4F",
        Children: "#8A4DFF",
        Clothing_Fashion: "#030FF4",
        Cosmetics_Beauty: "#FFA500",
        Education: "#FFC0CB",
        Fitness_Outdoors: "#0DD058",
        Food_Beverage: "#C0D901",
        Health_SelfCare: "#01A7D9",
        Lifestyle_Home: "#D95001",
        Media_Entertainment: "#D9018A",
        Other: "#D90101",
        PetProducts: "#01D98D",
        Services: "#5701D9",
        Software_Tech: "#D9C001",
        Travel_Auto: "#01D9C7",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Montserrat", "serif"],
        mono: ["Courier New", "monospace"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
