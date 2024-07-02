import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { deUmlaut } from "../utils/helpers";
import symbol_arrowright from "../assets/imgs/symbols/arrow-right.svg";
import styles from "./selectedprojectlist.module.css";
import DOMPurify from "dompurify";

const SelectedProjectList = (prop) => {
  const title = deUmlaut(prop.detail.title.rendered);
  return (
    <div>
      <Container className={`${styles.project_list}`}>
        <Row className={`${styles.project_row}`}>
          <Link
            className={`${styles.selected_projects_list_link}`}
            state={prop.detail}
            to={`/Projekte/Projekt/${prop.detail.slug}`}
          >
            <div className={`d-flex justify-content-between`}>
              <ul className={`mb-0 ${styles.list_width}`}>
                <li
                  className={`${styles.text_break}`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      `${prop.detail.title.rendered} (${prop.detail.acf.Jahr})`,
                    ),
                  }}
                ></li>
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
