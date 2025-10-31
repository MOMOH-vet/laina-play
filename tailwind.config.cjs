module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: require('tailwindcss/colors').slate,
        white: require('tailwindcss/colors').white
      }
    }
  },
  plugins: []
};
