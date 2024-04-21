export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      cursor: {
        // 'fancy': url("https://www.flaticon.com/free-icon/mouse_1536479"),
      },
      colors: {
        'primary': '#E9E9E9',
        'secondary': '#99A0BC',
        'white': '#FFFFFF',
        'danger': '#dc3545',
        // Add more custom colors as needed
      },
    },
    
    
  },
  plugins: [],
}