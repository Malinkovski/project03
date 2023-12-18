import Head from "next/head";
import PageError from "../components/PageErrors/PageError";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>{`Игралиште - Page not found`}</title>
        <meta name="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <PageError />
      </section>
    </>
  );
};

export default Custom404;
