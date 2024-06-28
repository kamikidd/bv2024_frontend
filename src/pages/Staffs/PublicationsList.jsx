import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DOMPurify from "dompurify";
import download_symbol from "../../assets/imgs/symbols/download.png";
import styles from "./staffs.module.css";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import { useNavigate } from "react-router-dom";

const PublicationsList = ({ prop }) => {
  const navigate = useNavigate();
  const pub_url = useQuery(
    ["downloads_1", `media/${prop.acf.select_file}`, ""],
    fetchData,
  );

  if (pub_url.isLoading) {
    return <Spinner></Spinner>;
  }
  if (pub_url.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <Container className={`${styles.pub_list}`}>
        <ul className={`${styles.publication_list}`}>
          <li>
            <Row>
              <a
                className={`${styles.publication_list_link}`}
                href={pub_url.data.source_url}
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
