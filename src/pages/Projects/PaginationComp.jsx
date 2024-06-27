import styles from "./projects.module.css";
import gostartpic from "../../assets/imgs/symbols/go-start.svg";
import goendpic from "../../assets/imgs/symbols/go-end.svg";
import lastpagepic from "../../assets/imgs/symbols/lastpage.svg";
import nextpagepic from "../../assets/imgs/symbols/nextpage.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PaginationComp = ({
  pageCount,
  postsPerPage,
  onPageChange,
  currentPage,
}) => {
  const pageNumbersList = [];
  for (let i = 1; i <= Math.ceil(pageCount / postsPerPage); i++) {
    pageNumbersList.push(i);
  }
  return (
    <div>
      <Row className={styles.page_number_row}>
        <Col className="col-auto p-0">
          <button
            className={styles.arrowBtn}
            onClick={() => {
              onPageChange(1);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={gostartpic}
              alt="firstpage"
              className={`${styles.arrow_btn_pic}`}
            />
          </button>
        </Col>
        <Col className="col-auto p-0">
          <button
            className={styles.arrowBtn}
            onClick={() => {
              if (currentPage != 1) {
                onPageChange(currentPage - 1);
                window.scrollTo(0, 0);
              }
            }}
          >
            <img
              src={lastpagepic}
              alt="prepage"
              className={`${styles.arrow_btn_pic}`}
            />
          </button>
        </Col>
        <Col className={`${styles.pageBtn} col-auto`}>
          <span className={`${styles.page_text}`}>Seite</span>
          &nbsp; &nbsp;
          <span className={`${styles.page_number} ${styles.page_num_color}`}>
            {currentPage}
          </span>
          &nbsp;
          <span className={`${styles.page_number}`}>/</span>
          <span className={`${styles.page_number}`}>
            &nbsp;{pageNumbersList.length}
          </span>
        </Col>
        <Col className="col-auto p-0">
          <button
            className={styles.arrowBtn}
            onClick={() => {
              if (currentPage != pageNumbersList.length) {
                onPageChange(currentPage + 1);
                window.scrollTo(0, 0);
              }
            }}
          >
            <img
              src={nextpagepic}
              alt="nextpage"
              className={`${styles.arrow_btn_pic}`}
            ></img>
          </button>
        </Col>
        <Col className="col-auto p-0">
          <button
            className={styles.arrowBtn}
            onClick={() => {
              onPageChange(pageNumbersList.length);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={goendpic}
              alt="lastpage"
              className={`${styles.arrow_btn_pic}`}
            />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PaginationComp;
