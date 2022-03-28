import Head from "next/head";
import "../styles/globals.css";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/logo.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />

        <meta name="theme-color" content="#FC4747" />
      </Head>
      <Wrap>
        <Component {...pageProps} />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  /* padding: 0 1.6rem; */
`;

export default MyApp;
