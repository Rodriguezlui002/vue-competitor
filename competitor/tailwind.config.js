module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#ff570a',
        'secondary': '#17BEBB',
        'secondary-active': '#0d6d6b',
        'tertiary': '#6c63ff',
        'tertiary-active': '#3d33ff'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
