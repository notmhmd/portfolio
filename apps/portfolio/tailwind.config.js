const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: {
        light: '#D0DCD7',
        DEFAULT: '#6B9080',
        dark: '#3D5249',
      },
      secondary: {
        light: '#EAF4F4',
        DEFAULT: '#79B9B9',
        dark: '#2A5050',
      },
      white: '#F6FFF8',
      black: '#152828',
    },
    // spacing: {
    //   sm: '0.5rem',
    //   md: '1rem',
    //   lg: '1.5rem',
    //   xl: '2rem',
    // },
  },
  plugins: [],
};
