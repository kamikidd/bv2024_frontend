import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laufendpic from "../../assets/imgs/symbols/laufend.png";
import fertigpic from "../../assets/imgs/symbols/finished.png";
import arrowrightpic from "../../assets/imgs/symbols/arrow-right.svg";
import { Link } from "react-router-dom";
import { deUmlaut } from "../../utils/helpers";
import styles from "./projects.module.css";
import DOMPurify from "dompurify";

const Project = (prop) => {
  const title = deUmlaut(prop.title);
  return (
    <div>
      <Container className={`${styles.project_list}`}>
        <Row className={`gx-3 ${styles.project_row}`}>
          <Col xs="auto d-flex align-items-center">
            {prop.laufend ? (
              <img src={laufendpic} alt="laufend"></img>
            ) : (
              <img src={fertigpic} alt="finished"></img>
            )}
          </Col>
          <Col>
            <Row>
              {prop.laufend ? (
                <div className={`${styles.list_smallFont_red}`}>laufend</div>
              ) : (
                <div className={`${styles.list_smallFont}`}>
                  {prop.detail.acf.Jahr}
                </div>
              )}
              <div className={`${styles.list_smallFont}`}>
                {prop.detail.acf.auftraggeber}
              </div>

              <Link
                className={`${styles.project_list_btn}`}
                to={`/Projekte/Projekt/${prop.detail.slug}/${prop.detail.id}`}
                state={prop.detail}
              >
                <div className="d-flex justify-content-between">
                  <div
                    className={`${styles.list_title}`}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(prop.title),
                    }}
                  ></div>

                  <img
                    className={`${styles.project_list_arrow}`}
                    src={arrowrightpic}
                    width="24px"
                    height="24px"
                    alt="arrowright"
                  ></img>
                </div>
              </Link>
            </Row>
          </Col>
        </Row>
        <hr className={`${styles.sep}`} />
      </Container>
    </div>
  );
};

export default Project;
