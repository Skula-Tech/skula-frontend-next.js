/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: 'var(--font-inter)',
        head: 'var(--font-varela)',
      },

      fontSize: {
        '2.5xl': ['1.625rem', '2rem'],
        '3.5xl': ['2rem', '2.375rem'],
      },

      lineHeight: {
        4.5: '1.125rem',
        6.5: '1.625rem',
      },

      colors: {
        n: {
          50: '#F0F3F5',
          100: '#E8EDF0',
          200: '#DCE2F0',
          300: '#CAD0E6',
          400: '#A6ABC1',
          500: '#858A9F',
          600: '#5D6376',
          700: '#4A5063',
          800: '#2C3243',
          900: '#0C1222',
        },
        1: {
          50: '#EFD0FB',
          100: '#E5B2FA',
          200: '#DE9BF8',
          300: '#E1A5F8',
          400: '#D788F7',
          500: '#CE6FF0',
          600: '#9D2FC8',
          700: '#8733A7',
          800: '#752C90',
          900: '#5C2371',
        },
        2: {
          50: '#EEF5FD',
          100: '#DDEAFC',
          200: '#C3DAF9',
          300: '#AACBF7',
          400: '#87B6F5',
          500: '#6EA6F2',
          600: '#588CD5',
          700: '#32609F',
          800: '#1B447E',
          900: '#183C70',
        },
        3: {
          50: '#EEF9FA',
          100: '#DDF4F5',
          200: '#C5ECEE',
          300: '#ABE3E5',
          400: '#89D9DD',
          500: '#63CBD0',
          600: '#3DBFC5',
          700: '#31989D',
          800: '#1F5F62',
          900: '#12393B',
        },
      },

      backgroundImage: {
        'gradient-sm': 'linear-gradient(180deg, #153461 -6%, #37D1D6 424.81%)',
        'gradient-lg': 'linear-gradient(180deg, #183C70 -6%, #5BC9CD 203.5%)',
        'gradient-logo':
          'linear-gradient(90deg, rgba(228, 136, 245, 0.5) 1.16%, rgba(115, 167, 235, 0.5) 52.12%, rgba(128, 181, 253, 0.5) 52.13%, rgba(98, 242, 166, 0.5) 100%)',
      },
    },
  },
  plugins: [],
}
