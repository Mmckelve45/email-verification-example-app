import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap");

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="overlays" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
