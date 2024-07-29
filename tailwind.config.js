module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#5271FF',
        'secondary-color': '#8C52FF',
        'secondary-color-dark': '#7A4FCC',
        'text-color-main': '#333333',
        'background-color-light': '#333',
        'background-color-2': '#222',
      },
      translate: {
        '-5': '-5px',
      },
    },
  },
  plugins: [],
};
