import NewsComp from "./NewsComp";
import Container from "react-bootstrap/Container";
import ServiceTab from "./ServiceTab";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import DOMPurify from "dompurify";
import Spinner from "../Others/Spinner";
import symbol_goto from "../../assets/imgs/symbols/arrow-right.png";
import styles from "./home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const services = useQuery(["services", "dienstleistungen", ""], fetchData);

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

      <Container>
        <Link to="/Projekte/laufend" className={`${styles.current_projects}`}>
          <span>
            Laufende Projekte
            <img src={symbol_goto} alt="Laufende Projekte" height="24px"></img>
          </span>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
