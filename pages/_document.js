import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://waysof.ml" />
          <meta property="og:title" content="Ways of ML" />
          <meta property="og:image" content="https://waysof.ml/og3.png" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="819" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="Powered by InfuseAI" />

          {/* gtm */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />

          {/* plausible */}
          <script defer data-domain="waysof.ml" src="https://plausible.io/js/plausible.outbound-links.js"></script>
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
