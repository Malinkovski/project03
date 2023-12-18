import type { NextPage } from "next";
import Head from "next/head";
import { FaqPageProps, QuestionProps } from "../properties/pageprops";
import PageTitle from "../components/PageCommon/PageTitle";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import { FAQ_API } from "../properties/variables";
import fetchData from "../utilities/fetch-data";
import ListFAQ from "../components/Misc/ListFAQ";

const FaqPage: NextPage<FaqPageProps & QuestionProps> = (data) => {
  const { faq_title, questions } = data;
  return (
    <>
      <Head>
      <title>{`Игралиште - ${faq_title}`}</title>
        <meta name="FAQ page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="faq contact">
        <div className="container">
          <Breadcrumbs />
          <PageTitle title={faq_title} />
          <ListFAQ questions={questions}/>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return await fetchData(FAQ_API);
}

export default FaqPage;
