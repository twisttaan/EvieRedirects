import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Team Evie" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evie.pw/" />
        <meta
          property="og:image"
          content="https://evie.pw/assets/images/Banner.png"
        />
        <meta
          property="twitter:image"
          content="https://evie.pw/assets/images/Banner.png"
        />
        <meta
          property="og:description"
          content="Team Evie creators of projects centered around Discord."
        />
        <meta name="theme-color" content="#FF0000" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Evie" />
        <meta name="application-name" content="Evie" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
