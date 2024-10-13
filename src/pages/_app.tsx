import Layout from "../../components/Layout";
import type { AppProps } from "next/app";
// import NextTopLoader from "nextjs-toploader";
import "./globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
