import '@/styles/globals.css'

import { DefaultSeo } from "next-seo";



export default function App({ Component, pageProps }) {
  return <>
    <DefaultSeo defaultTitle="Aaron Yarborough" titleTemplate="%s | Aaron Yarborough"/>
    <Component {...pageProps} />
  </>
}
