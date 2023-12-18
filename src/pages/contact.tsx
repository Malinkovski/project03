import type { NextPage } from "next";
import Head from "next/head";
import { ContactPageProps } from "../properties/pageprops";
import PageTitle from "../components/PageCommon/PageTitle";
import Breadcrumbs from "../components/Breadcrumbs/BreadCrumbs";
import { CONTACT_API } from "../properties/variables";
import fetchData from "../utilities/fetch-data";

const About: NextPage<ContactPageProps> = (props) => {
  const { contact_title, image, title, text, address, number, working_hours } = props;

  return (
    <>
      <Head>
      <title>{`Игралиште - ${contact_title}`}</title>
        <meta name="contact page"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="info contact">
        <div className="container">
          <Breadcrumbs />
          <PageTitle title={contact_title} />

          <div className="content">
            <div className="content-image content-w-50-image" style={{ backgroundImage: `url(${image})` }}>
              {/* BGImg */}
            </div>
            <div className="content-text">
              <h2>{title}</h2>
              <p>{text}</p>
              <p className="address">{address}</p>
              <div className="phone-number">
                <h2>Телефон за контакт:</h2>
                <h3>{number}</h3>
              </div>
              <div className="working-hours">
                <h2>Работно време:</h2>
                <p>{working_hours.weekdays}</p>
                <p>{working_hours.weekends}</p>
              </div>
              <div className="button-wrapper">
                <a href="https://www.google.com/maps/place/Igrali%C5%A1te/@41.9993656,21.420193,17z/data=!3m1!4b1!4m6!3m5!1s0x135415d370780d7f:0x144a59c79c946d63!8m2!3d41.9993656!4d21.4227679!16s%2Fg%2F11nn1fgmtl?entry=ttu">
                  <div className="button button-gold">Кон продавницата</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return await fetchData(CONTACT_API);
}

export default About;
