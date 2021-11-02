module.exports = {
  mode:'jit',
  purge: [
    "./public/**/*.{html,js}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      Poppins:['Poppins, sans-serif']
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:'1124px',
        xl:"1124px",
        "2xl":"1124px",
      },
    },
    extend: {
      colors:{
        "bookmark-purple":"#69349C",
        "bookmark-red":"#FA5959",
        "bookmark-blue":"#242A45",
        "bookmark-grey":"#9194A2",
        "bookmark-white":"#f7f7f7"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
