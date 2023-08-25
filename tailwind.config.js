/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  theme: {
    fontSize: {
      'xs': ['12px'],
      'sm': ['14px'],
      'base': ['16px'],
      'lg': ['18px'],
      'xl': ['24px'],
      '2xl': ['32px'],
      '6xl': ['36px'],
      '7xl': ['44px'],
    },
    colors: {
      lightblue: "#128CFD",
      lightblueHover: "#2a94b9",
      lightgrey: "#E4EAF5",
      grey: "#7D8BA6",
      white: "white",
      light: '#F8F9FD',
      darkblue: "#161b22",
      whiteTransparent: "rgba(255,255,255, 0.1)",
      blackTransparent: "rgba(0,0,0, 0.1)",
      black: "#161B22",
      lightBlack: "#222832",
      superLightBlack: "#2E3643",
      blueTransparent: "rgba(18, 140, 253, 0.1)",
      superLightBlue: "#F8F9FD"
    },
    extend: {},
    fontFamily: {
      averta: ['Averta Demo PE Regular', 'sans-serif'],
      benzin: ['Averta Demo PE Regular', 'sans-serif'],
      benzina: ['Averta Demo PE Regular', 'sans-serif'],

    }
  },
  plugins: [],
}

