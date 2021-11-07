module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#303030',
          light: 'white'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
