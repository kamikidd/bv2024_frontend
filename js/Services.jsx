import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SelectedProject4ServicePage from "./SelectedProject4ServicePage";
import ShowServiceInfo from "./ShowServiceInfo";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { projectIdFetching } from "./helpers";
import Spinner from "./Spinner";

const btn_active = {
  background: "#C00000",
  color: "#fff",
  textdecoration: "none",
  textTransform: "uppercase",
  FontWeight: "600",
  boxShadow: "none",
};
const btn_inactive = {
  background: "#ffffff",
  color: "#000000",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
  FontWeight: "500",
};

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
    fetchData
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

  const changeStyle = () => {
    setStyle("btn_active");
  };

  return (
    <div>
      <Container className="categoryTitle">DIENSTLEISTUNGEN</Container>
      <Container>
        <Tab.Container
          id="tabs"
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
                      onClick={() => changeStyle()}
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
          <Row>
            <Col xl={4} className="service_part2">
              <div className="service_projects_list_title">
                Ausgewählte Projekte
              </div>
            </Col>
            <Col xl={8} className=" service_part2">
              <Tab.Content>
                {services.data.map((service) => (
                  <Tab.Pane key={service.id} eventKey={service.title.rendered}>
                    <div>
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
