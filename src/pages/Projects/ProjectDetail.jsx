import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import DownloadPDF from "./DownloadPDF";
import styles from "./projects.module.css";

const ProjectDetail = () => {
  const location = useLocation();
  const state = location.state;
  const detail = state.acf;
  const partners = detail.kooperationspartner.split("\r\n");
  const methods = detail.vorgehenmethoden.split("\r\n");
  console.log(state);
  return (
    <div>
      <Container className="categoryTitle">PROJEKTE</Container>

      <Container>
        <Row>
          <Col xl={4}>
            <div className={`${styles.back_btn_projectdetail} text_color`}>
              <Link to="/Projekte">Zurück zur Übersicht</Link>
            </div>
          </Col>

          <Col xl={8}>
            <Row>
              <Col className={`${styles.project_detail_title}`}>
                {state.title.rendered}
              </Col>
            </Row>
            {detail.kooperationspartner ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Kooperationspartner
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {partners.map((line, index) => (
                    <ul className={`${styles.partner}`} key={index}>
                      {line}
                    </ul>
                  ))}
                </Col>
                <hr />
              </Row>
            ) : null}
            {detail.auftraggeber ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Auftraggeber
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {detail.auftraggeber}
                </Col>
                <hr />
              </Row>
            ) : null}
            {detail.Jahr ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Laufzeit
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {detail.Jahr}
                </Col>
                <hr />
              </Row>
            ) : null}

            {detail.inhalte ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Inhalte
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {detail.inhalte}
                </Col>
                <hr />
              </Row>
            ) : null}

            {detail.vorgehenmethoden ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Vorgehen/Methoden
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {methods.map((line, index) => (
                    <ul className={`${styles.method}`} key={index}>
                      -{line}
                    </ul>
                  ))}
                </Col>
                <hr />
              </Row>
            ) : null}

            {detail.downloads_1 || detail.downloads_2 || detail.downloads_3 ? (
              <Row>
                <Col>
                  <Row className={`${styles.detail_left}`} xl={3}>
                    Downloads
                  </Row>
                  {detail.downloads_1 ? (
                    <Row className={`${styles.detail_right}`} xl={9}>
                      <DownloadPDF prop={detail.downloads_1}></DownloadPDF>
                    </Row>
                  ) : null}
                  {detail.downloads_2 ? (
                    <Row className={`${styles.detail_right}`} xl={9}>
                      <DownloadPDF prop={detail.downloads_2}></DownloadPDF>
                    </Row>
                  ) : null}
                  {detail.downloads_3 ? (
                    <Row className={`${styles.detail_right}`} xl={9}>
                      <DownloadPDF prop={detail.downloads_3}></DownloadPDF>
                    </Row>
                  ) : null}
                  <hr />
                </Col>
              </Row>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProjectDetail;
