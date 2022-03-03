import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white text-black dark:bg-black dark:text-black transition-all duration-200 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
