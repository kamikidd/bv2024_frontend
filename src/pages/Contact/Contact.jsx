import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location from "../../assets/imgs/map.png";
import styles from "./contact.module.css";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const Contact = () => {
  const navigate = useNavigate();
  //29060 is id of post
  const addr_intro = useQuery(
    ["Wegbeschreibung", "pages/29060", ""],
    fetchData,
  );
  //29064 is id of media
  const media = useQuery(["staff_pic", `media`, 29064], fetchData);
  if (media.isLoading || addr_intro.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError || addr_intro.isError) {
    navigate("/NotMatch404");
  }
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
                <div className={`${styles.contact_info}`}>
                  <a
                    href={`tel:+41 31 312 65 75`}
                    className={` ${styles.tel_info} `}
                  >
                    +41 31 312 65 75
                  </a>
                </div>
                <br></br>
                <div
                  className={`${styles.contact_info} ${styles.text_underline}`}
                >
                  <a href={`mailto:info@buerovatter.ch`}>info@buerovatter.ch</a>
                </div>
                <br></br>
                <br></br>
                <div className={`${styles.map_text_container}`}>
                  <span>
                    <a
                      href="https://maps.app.goo.gl/pK5fmbpc5qx59JkW9"
                      className={`${styles.addr_info}`}
                    >
                      Google Maps
                    </a>
                  </span>
                  <span>
                    <a
                      href={media.data.source_url}
                      className={`${styles.addr_info}`}
                    >
                      Printable Map
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={8} xs={12}>
            <img className={`${styles.map}`} src={location} alt="map" />
          </Col>
        </Row>

        <div className={`${styles.contact_addr_title}`}>
          Wegbeschreibung ab Bahnhof Bern
        </div>
        <p
          className={`${styles.contact_addr_detail}`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(addr_intro.data.content.rendered),
          }}
        ></p>
        <br />
      </Container>
    </div>
  );
};

export default Contact;
