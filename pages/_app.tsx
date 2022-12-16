import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head> */}
      <Script
        type="module"
        src="https://cdneu2c001assidev01.azureedge.net/kingslanding-webcomponents/latest/kingslanding-webcomponents.esm.js?q=1234"
      ></Script>
      {/* </Head> */}
      <ul>
        <li>
          <Link href="/test">Test</Link>
        </li>
        <li>
          <Link href="/main">Main</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/2">Users with id</Link>
        </li>
      </ul>
      <ibk-font
        suppressHydrationWarning={true}
        text="Nº DE TARJETA"
        type="label"
        color="red"
      ></ibk-font>
      {/* <ibk-font text="Nº DE TARJETA" type="label" color="gray"></ibk-font> */}
      <Component {...pageProps} />
    </>
  );
}
