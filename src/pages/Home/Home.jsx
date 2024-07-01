import NewsComp from "./NewsComp";
import Container from "react-bootstrap/Container";
import ServiceTab from "./ServiceTab";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import DOMPurify from "dompurify";
import Spinner from "../Others/Spinner";
import symbol_goto from "../../assets/imgs/symbols/arrow-right.svg";
import styles from "./home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const services = useQuery(["services", "dienstleistungen", ""], fetchData);
  //28911 is id of post
  const landing_intro = useQuery(
    ["landingIntro", "pages/28911", ""],
    fetchData,
  );
  if (services.isLoading || landing_intro.isLoading) {
    return <Spinner></Spinner>;
  }
  if (services.isError || landing_intro.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <Container
        className={`${styles.intro}`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(landing_intro.data.content.rendered),
        }}
      ></Container>
      <Container className="categoryTitle">DIENSTLEISTUNGEN</Container>
      <Container>
        <ServiceTab props={services}></ServiceTab>
      </Container>
      <Container className="categoryTitle">AKTUELLES</Container>
      <Container>
        <NewsComp></NewsComp>
      </Container>

      <Container className="text-end">
        {/* <span className={`${styles.current_projects}`}>
          <Link to="/Projekte/laufend">
            <span className={`${styles.laufend_project_btn_text}`}>
              Laufende Projekte
            </span>
            <img src={symbol_goto} alt="Laufende Projekte" height="28px"></img>
          </Link>
        </span> */}

        <Link to="/Projekte/laufend">
          <button className={`${styles.laufend_project_btn}`}>
            <span className={`${styles.laufend_project_btn_text}`}>
              Laufende Projekte
            </span>
            <img src={symbol_goto} alt="Laufende Projekte" height="28px"></img>
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
