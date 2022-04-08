import '../styles/globals.css'
import '../styles/style.css'
import Head from "next/head";
import Script from 'next/script'
import Navbar from './navbar'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <link rel="stylesheet" href="https://unpkg.com/@mui/material@latest/umd/material-ui.development.js" crossOrigin='anonymous' ></link> 
      <Script src="https://unpkg.com/@mui/material@latest/umd/material-ui.development.js" strategy='lazyOnoad'></Script>
      <Navbar />
      <Component {...pageProps} />
  </>
);
}

export default MyApp
