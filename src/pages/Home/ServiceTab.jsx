import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicePicComp from "./ServicePicComp";
import { Link } from "react-router-dom";
import styles from "./servicetab.module.css";
const ServiceTab = ({ props }) => {
  return (
    <Container className={`${styles.home_service_content}`}>
      <Row className={`${styles.home_service_row}`}>
        {props.data.map((service) => (
          <Col
            xl={4}
            lg={4}
            md={6}
            className={`${styles.home_service_box}`}
            key={service.id}
          >
            <Link to="/Dienstleistungen" state={service.title.rendered}>
              <ServicePicComp
                imgid={service.acf.imgid}
                picName={service.title.rendered}
              ></ServicePicComp>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ServiceTab;
