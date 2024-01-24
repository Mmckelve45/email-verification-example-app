import Layout from "components/layout/layout";
import Head from "next/head";
import "styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Shark Tank API</title>
        <meta
          name="description"
          content="Shark Tank API - A Developers Playgound"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="icon" href="/stapiFinLogo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
