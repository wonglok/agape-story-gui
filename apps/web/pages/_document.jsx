import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.remoteImport = (v) => import(v)
            `,
          }}
        ></script>
        {/*  */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
