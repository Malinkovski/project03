import type { NextPage } from "next";
import Head from "next/head";
import { AboutPageProps } from "../properties/pageprops";
import PageTitle from "../components/PageCommon/PageTitle";
import ButtonSplit from "../components/Buttons/ButtonSplit";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import { ABOUT_API } from "../properties/variables";
import fetchData from "../utilities/fetch-data";

const About: NextPage<AboutPageProps> = (props) => {
  const {
    about_title,
    first_title,
    second_title,
    first_content,
    second_content,
    third_content,
    forth_content,
    first_image,
    second_image,
  } = props;

  const [selected, setSelected] = useState(true);

  const getBackgroundImage = () => ({
    backgroundImage: `url(${selected ? first_image : second_image})`,
  });

  const handleLeftButton = () => setSelected(true);
  const handleRightButton = () => setSelected(false);

  return (
    <>
      <Head>
        <title>{`Игралиште - ${about_title}`}</title>
        <meta name="about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="info">
        <div className="container">
          <Breadcrumbs />
          <PageTitle title={about_title} />
          <ButtonSplit
            optionOne="Нашата приказна"
            optionTwo="Нашата работа"
            onLeftClick={handleLeftButton}
            onRightClick={handleRightButton}
          />
          <div className="content">
            <div className="content-w-50-image content-image" style={getBackgroundImage()}>
              {/* BGImg */}
            </div>
            <div className="content-text">
              <h2>{selected ? first_title : second_title}</h2>
              <div>
                <p>{selected ? first_content : third_content}</p>
                <p>{selected ? second_content : forth_content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return await fetchData(ABOUT_API);
}

export default About;
