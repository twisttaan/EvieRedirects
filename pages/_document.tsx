import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white text-black dark:bg-[#171a1c] dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
