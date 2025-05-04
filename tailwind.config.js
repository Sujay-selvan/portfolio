// tailwind.config.js
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx,html}',
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['MyCustomFont', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  