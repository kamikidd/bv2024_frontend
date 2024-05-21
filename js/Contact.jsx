import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../imgs/map.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Container className="categoryTitle">KONTAKT</Container>
      <Container id="message">
        Wir freuen uns über Ihre Kontaktaufnahme!
      </Container>
      <Container>
        <Row id="contact-row">
          <Col xl={7} lg={8} xs={12}>
            <img id="map" src={location} alt="map" />
          </Col>
          <Col xl={5} lg={4} xs={12}>
            <div id="contact_company_name">
              Büro Vatter AG <br></br> Politikanalyse
            </div>
            <div className="contact_info">
              Gerberngasse 27<br></br>CH-3011 Bern
            </div>
            <br></br>
            <div className="contact_info">+41 31 312 65 75</div>
            <br></br>
            <div>
              <Link to="" className="contact_info email_link">
                info@buerovatter.ch
              </Link>
            </div>
            <br></br>
            <br></br>
            <Row>
              <Col>
                <Link to="" className="addr_info">
                  Google Maps
                </Link>
              </Col>
              <Col>
                <Link to="" className="addr_info">
                  Printable Map
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <div id="contact_addr_title">Wegbeschreibung ab Bahnhof Bern</div>
        <p id="contact_addr_detail">
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
