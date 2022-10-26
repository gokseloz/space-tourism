import "../styles/globals.css";
import Head from "next/head";
import { SidebarProvider } from "../context/SidebarContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </>
  );
}

export default MyApp;
