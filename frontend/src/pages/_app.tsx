import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.css';

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

export default MyApp
