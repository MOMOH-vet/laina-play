import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        white: colors.white
      }
    }
  },
  plugins: []
};
