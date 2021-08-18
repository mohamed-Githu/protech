import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import "tailwindcss/tailwind.css";

import Spinner from "../components/ui/spinner.ui";

import { DrawerProvider } from "../context/drawer.context";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleStart = () => setIsLoading(true);
  const handleStop = () => setIsLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);

    return () => {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
    };
  }, [router]);

  useEffect(() => handleStop(), []);
  return isLoading ? (
    <Spinner />
  ) : (
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
