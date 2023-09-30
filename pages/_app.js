import { NextAuthProvider } from '../Auth/Providers'
import '../styles/globals.css'
import ThemeRegistry from '../themeRegistery/ThemeRegistry'

function MyApp({ Component,  pageProps: { session, ...pageProps }}) {


  return (
  <ThemeRegistry>
    <NextAuthProvider>
  <Component {...pageProps} />
    </NextAuthProvider>
 
  </ThemeRegistry>
  )
}

export default MyApp
