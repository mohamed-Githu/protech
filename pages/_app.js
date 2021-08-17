import Head from "next/head";
import "tailwindcss/tailwind.css";

import { DrawerProvider } from "../context/drawer.context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </>
  );
}

export default MyApp;
