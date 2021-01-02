// https://github.com/parcel-bundler/parcel/issues/4550 
// postCSS in parcel can not detect NODE_ENV
const devMode = process.env['npm_lifecycle_script'] !== 'parcel "src\index.html"'
console.log(devMode ? "In development mode" : "In production mode")

module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    enabled: !devMode,
  }
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
