import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { deUmlaut } from "../utils/helpers";
import symbol_arrowright from "../assets/imgs/symbols/arrow-right.png";
import styles from "./selectedprojectlist.module.css";
const SelectedProjectList = (prop) => {
  const title = deUmlaut(prop.detail.title.rendered);

  return (
    <div>
      <Container className={`${styles.project_list}`}>
        <Row className={`${styles.project_row}`}>
          <Link
            className={`${styles.selected_projects_list_link}`}
            state={prop.detail}
            to={`/Projekt/${title}`}
          >
            <div
              className={`d-flex justify-content-between ${styles.selected_projects_list}`}
            >
              <ul>
                <li>
                  {prop.detail.title.rendered} ({prop.detail.acf.Jahr})
                </li>
              </ul>
              <img
                src={symbol_arrowright}
                width="24px"
                height="24px"
                alt="arrowright"
              ></img>
            </div>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default SelectedProjectList;
