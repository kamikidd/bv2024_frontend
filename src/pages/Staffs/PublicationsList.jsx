import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DOMPurify from "dompurify";
import download_symbol from "../../assets/imgs/symbols/download.png";
import styles from "./staffs.module.css";

const PublicationsList = ({ prop }) => {
  return (
    <div>
      <Container className={`${styles.pub_list}`}>
        <ul className={`${styles.publication_list}`}>
          <li>
            <Row>
              <a
                className={`${styles.publication_list_link}`}
                href={prop.acf.url}
              >
                <div className="d-flex justify-content-between">
                  <span
                    className="symbol"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(prop.title.rendered),
                    }}
                  ></span>
                  <img
                    src={download_symbol}
                    width="24px"
                    height="24px"
                    alt="herunterladen"
                  ></img>
                </div>
              </a>
            </Row>
            <Row>
              <div
                className="subtitle"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    `${prop.acf.herausgeber} - ${prop.acf.zeitraum}`,
                  ),
                }}
              ></div>
            </Row>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default PublicationsList;
