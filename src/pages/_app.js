import "@/styles/tacit-css-1.7.1.min.css";
import "@/styles/globals.css";

import { Merriweather } from "next/font/google";
import { DefaultSeo } from "next-seo";

const merriweather = Merriweather({ subsets: ["latin"], weight: [ "400", "700" ]});


export default function App({ Component, pageProps }) {
  return <main className={merriweather.className}>
    <DefaultSeo defaultTitle="Aaron Yarborough" titleTemplate="%s | Aaron Yarborough"/>
    <Component {...pageProps} />
  </main>
}
