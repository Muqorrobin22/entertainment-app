import Head from "next/head";
import "../styles/globals.css";
import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import data from "../public/data.json";

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
        <Navbar />
        <WrapComponent>
          <Component {...pageProps} data={data} />
        </WrapComponent>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  /* padding: 0 1.6rem; */
`;

const WrapComponent = styled.div`
  padding: 0 1.6rem;
  @media (min-width: 768px) {
    margin: 0 2.4rem;
  }

  @media (min-width: 1440px) {
    margin: 7.5rem 3.6rem 0 20rem;
  }
`;

export default MyApp;
