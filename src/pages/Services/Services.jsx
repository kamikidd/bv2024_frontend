import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SelectedProject4ServicePage from "./SelectedProject4ServicePage";
import ShowServiceInfo from "./ShowServiceInfo";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { projectIdFetching } from "../../utils/helpers";
import Spinner from "../Others/Spinner";
import styles from "./service.module.css";
const Services = () => {
  // const param = useParams();
  const location = useLocation();
  const servicename = location.state;
  console.log(servicename);

  const navigate = useNavigate();
  const [style, setStyle] = useState("btn_active");
  const services = useQuery(["services", "dienstleistungen", ""], fetchData);
  const targetedCaterogy = useQuery(
    ["showonservicepage", "isshownonserviceinfopage", ""],
    fetchData,
  );

  if (services.isLoading || targetedCaterogy.isLoading) {
    return <Spinner></Spinner>;
  }
  if (services.isError || targetedCaterogy.isError) {
    navigate("/NotMatch404");
  }
  let id = projectIdFetching(targetedCaterogy.data, "Ja");
  // const state = param.id == null ? services.data[0].title.rendered : param.id;
  const state =
    servicename == null ? services.data[0].title.rendered : servicename;

  return (
    <div>
      <Container className="categoryTitle">DIENSTLEISTUNGEN</Container>
      <Container>
        <Tab.Container
          defaultActiveKey={state ? state : services.data[0].title.rendered}
        >
          <Row>
            <Col xl={4}>
              <Nav variant="pills" className="flex-column">
                {services.data.map((service) => (
                  <Nav.Item key={service.id}>
                    <Nav.Link
                      eventKey={service.title.rendered}
                      className={style}
                    >
                      {service.title.rendered}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col xl={8}>
              <Tab.Content>
                {services.data.map((service) => (
                  <Tab.Pane eventKey={service.title.rendered} key={service.id}>
                    <div>
                      <ShowServiceInfo
                        serviceinfo={service.content.rendered}
                      ></ShowServiceInfo>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
          <Row className={`${styles.service_paragraph_spacing}`}>
            <Col xl={4}>
              <div
                className={`${styles.service_projects_list_title}  ${styles.service_paragraph_spacing}`}
              >
                Ausgewählte Projekte
              </div>
            </Col>
            <Col xl={8}>
              <Tab.Content>
                {services.data.map((service) => (
                  <Tab.Pane key={service.id} eventKey={service.title.rendered}>
                    <div className={`${styles.service_paragraph_spacing}`}>
                      <SelectedProject4ServicePage
                        service={service.acf.service_taxonomy}
                        isshownid={id[0].id}
                      ></SelectedProject4ServicePage>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Services;
