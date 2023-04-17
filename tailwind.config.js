/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      cyan: {
        DEFAULT: 'hsl(172, 67%, 45%)',
        dark: 'hsl(183, 100%, 15%)'
      },
      'grayish-cyan': {
        dark: 'hsl(186, 14%, 43%)',
        DEFAULT: 'hsl(184, 14%, 56%)',
        light: 'hsl(185, 41%, 84%)',
        extralight: 'hsl(189, 41%, 97%)'
      },
      white: 'hsl(0, 100%, 100%)',
      red: 'rgb(220 38 38)'
    },
    fontFamily: {
      sans: ['Space Mono', 'monospace']
    },
    extend: {}
  },
  plugins: []
}
