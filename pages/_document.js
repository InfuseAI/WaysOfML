import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* plausible */}
          <script
            defer
            data-domain="waysof.ml"
            src="https://plausible.io/js/plausible.outbound-links.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
