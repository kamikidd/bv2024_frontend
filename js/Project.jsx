import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laufendpic from "../imgs/symbols/laufend.png";
import fertigpic from "../imgs/symbols/finished.png";
import arrowrightpic from "../imgs/symbols/arrow-right.png";
import { Link } from "react-router-dom";
import { deUmlaut } from "./helpers";
const Project = (prop) => {
  const title = deUmlaut(prop.title);
  console.log(prop);
  return (
    <div>
      <Container id="project_list">
        <Row id="project_row" className="gx-3">
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
                <div className="list_smallFont_red">laufend</div>
              ) : (
                <div className="list_smallFont">{prop.detail.acf.Jahr}</div>
              )}
              <div className="list_smallFont">
                {prop.detail.acf.auftraggeber}
              </div>

              <Link
                className="project_list_btn"
                to={`/Projekt/${title}`}
                state={prop.detail}
              >
                <div className="d-flex justify-content-between">
                  <div className="list_title">{prop.title}</div>

                  <img
                    className="project_list_arrow"
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
        <hr id="sep" />
      </Container>
    </div>
  );
};

export default Project;
