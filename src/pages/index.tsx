import { Global, css } from '@emotion/react';
import { Scene } from 'components/Scene';
import Head from 'next/head';

const styles = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Index = () => (
  <main>
    <Head>
      <title>Hvítur Monster</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hvítur Monster" />
      <meta name="twitter:image" content="/og.png" />

      <meta property="og:title" content="Hvítur Monster" key="title" />
    </Head>
    <Global styles={styles} />
    <Scene />
  </main>
);

export default Index;
