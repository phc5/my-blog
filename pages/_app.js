import 'nextra-theme-blog/style.css'
import { usePanelBear } from '../hooks/usePanelbear'
import Head from 'next/head'
import Prism from 'prism-react-renderer/prism'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  usePanelBear(process?.env?.NEXT_PUBLIC_PANEL_BEAR_ID, {
    // Uncomment to allow sending events on localhost, and log to console too.
    debug: false
  })
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="WdbudBvSIpsb3kKc_omZY845uEArLeCuxMMe7rJ51gA"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
