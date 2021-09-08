const mode = process.env.VUE_APP_BASE_URL
let base_Url
if (mode === 'development') {
  console.log(mode)
} else if (mode === 'production') {
  console.log(mode)
}
console.log(mode)
