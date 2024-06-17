import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../../assets/imgs/map.png";
import { Link } from "react-router-dom";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div>
      <Container className="categoryTitle">KONTAKT</Container>
      <Container className={`${styles.message}`}>
        Wir freuen uns über Ihre Kontaktaufnahme!
      </Container>
      <Container>
        <Row className={`${styles.reverse_row}`}>
          <Col xl={5} lg={4} xs={12}>
            <div>
              <div>
                <div className={`${styles.contact_company_name}`}>
                  Büro Vatter AG <br></br> Politikanalyse
                </div>
                <div className={`${styles.contact_info}`}>
                  Gerberngasse 27<br></br>CH-3011 Bern
                </div>
                <br></br>
                <div className={`${styles.contact_info}`}>+41 31 312 65 75</div>
                <br></br>
                <div>
                  <Link
                    to=""
                    className={`${styles.contact_info} ${styles.email_link}`}
                  >
                    info@buerovatter.ch
                  </Link>
                </div>
                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <Link to="" className={`${styles.addr_info}`}>
                      Google Maps
                    </Link>
                  </Col>
                  <Col>
                    <Link to="" className={`${styles.addr_info}`}>
                      Printable Map
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={8} xs={12}>
            <img className={`${styles.map}`} src={location} alt="map" />
          </Col>
        </Row>

        <div className={`${styles.contact_addr_title}`}>
          {/* TODO: get text below from restapi*/}
          Wegbeschreibung ab Bahnhof Bern
        </div>
        <p className={`${styles.contact_addr_detail}`}>
          {/* TODO: get text below from restapi*/}
          Bus Nr. 12 Richtung Zentrum Paul Klee benützen, bis Haltestelle
          Nydegg. <br></br>
          In Fahrtrichtung einige Meter weiter gehen, vor der Nydeggbrücke
          rechts via Nydeggtreppe in die Gerberngasse, dort rechts. Die Nr. 27
          befindet sich ca. 300 m weiter auf der linken Seite. <br></br>
          Der Eingang befindet sich an der Frontseite, gegenüber dem Brunnen.
        </p>
        <br />
      </Container>
    </div>
  );
};

export default Contact;
