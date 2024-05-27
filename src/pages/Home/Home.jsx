import NewsComp from "./NewsComp";
import Container from "react-bootstrap/Container";
import ServicePicComp from "../Services/ServicePicComp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import DOMPurify from "dompurify";
import Spinner from "../Others/Spinner";
import symbol_goto from "../../assets/imgs/symbols/arrow-right.png";
const Home = () => {
  const navigate = useNavigate();

  const services = useQuery(["services", "dienstleistungen", ""], fetchData);

  const landing_intro = useQuery(
    ["landingIntro", "pages/28911", ""],
    fetchData
  );
  if (services.isLoading || landing_intro.isLoading) {
    return <Spinner></Spinner>;
  }
  if (services.isError || landing_intro.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div id="home-content">
      <Container
        id="intro"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(landing_intro.data.content.rendered),
        }}
      ></Container>
      <Container className="categoryTitle">DIENSTLEISTUNGEN</Container>

      <Container className="home-service-content">
        <Row className="home-service-row">
          {services.data.map((service) => (
            <Col
              xl={4}
              lg={4}
              md={6}
              className="home-service-box"
              key={service.id}
            >
              <Link to="/Dienstleistungen" state={service.title.rendered}>
                {/* <Link to={`/Dienstleistungen/${service.title.rendered}`}> */}
                <ServicePicComp
                  imgid={service.acf.imgid}
                  picName={service.title.rendered}
                ></ServicePicComp>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="categoryTitle">AKTUELLES</Container>
      <Container>
        <NewsComp></NewsComp>
      </Container>

      <Container>
        <Link to="/Projekte/laufend" id="currentProjects">
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
