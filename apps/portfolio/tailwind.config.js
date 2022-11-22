const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    // spacing: {
    //   sm: '0.5rem',
    //   md: '1rem',
    //   lg: '1.5rem',
    //   xl: '2rem',
    // },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#6B9080',
          'primary-content': '#3D5249',
          'primary-focus': '#D0DCD7',

          secondary: '#79B9B9',
          'secondary-content': '#2A5050',
          'secondary-focus': '#EAF4F4',

          white: '#F6FFF8',
          black: '#152828',
        },
      },
    ],
  },
};
