import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import DownloadPDF from "./DownloadPDF";
import styles from "./projects.module.css";
import symbol_backto from "../../assets/imgs/symbols/arrow-left.svg";
import DOMPurify from "dompurify";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const project = useQuery(["project", `projekte/${param.id}`, ""], fetchData);
  if (project.isLoading) {
    return <Spinner></Spinner>;
  }

  if (project.isError) {
    navigate("/NotMatch404");
  }
  const detail = project.data.acf;
  const partners = detail.kooperationspartner.split("\r\n");
  const methods = detail.vorgehenmethoden.split("\r\n");
  return (
    <div>
      <Container className="categoryTitle">PROJEKTE</Container>

      <Container>
        <Row className={`${styles.reverse_row}`}>
          <Col xl={8}>
            <Row>
              <Col
                className={`${styles.project_detail_title}`}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(project.data.title.rendered),
                }}
              ></Col>
            </Row>
            {detail.kooperationspartner ? (
              <Row>
                <Col className={`${styles.detail_left}`} xl={3}>
                  Kooperationspartner
                </Col>
                <Col className={`${styles.detail_right}`} xl={9}>
                  {partners.map((line, index) => (
                    <ul className={`${styles.partner}`} key={index}>
                      <li>{line}</li>
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
                      <li>-{line}</li>
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
          <Col xl={4}>
            <Link to="/Projekte">
              <button className={`${styles.back_to_project_btn}`}>
                <img src={symbol_backto} alt="refresh page" height="24px"></img>
                <span className={`${styles.back_to_project_btn_text}`}>
                  Alle Projekte anzeigen
                </span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProjectDetail;
