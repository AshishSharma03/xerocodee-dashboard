import '../styles/globals.css'
import ThemeRegistry from '../themeRegistery/ThemeRegistry'

function MyApp({ Component, pageProps }) {


  return (
  <ThemeRegistry>
  <Component {...pageProps} />
  </ThemeRegistry>
  )
}

export default MyApp
