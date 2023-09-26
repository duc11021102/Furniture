/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      }
    },
    fontFamily: {
      body: ['Montserrat']
    }
  },
  screens: {
    'xs': '0px',
    // => @media (min-width: 640px) { ... } mobile
    'sm': '640px',
    // => @media (min-width: 640px) { ... } tablet

    'md': '768px',
    // => @media (min-width: 768px) { ... } untra tablet

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... } // laptop

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... } // untra laptop

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... } // desktop
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

