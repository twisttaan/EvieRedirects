import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          defer
          data-website-id="baa9a56a-a68f-4709-a600-cefcfa6f3fa2"
          src="https://tail.evie.pw/umami.js"
        />
      </Head>
      <body className="bg-white text-black dark:bg-[#171a1c] dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
