import styles from "../css/projects.module.css";
import gostartpic from "../imgs/symbols/go-start.png";
import goendpic from "../imgs/symbols/go-end.png";
import lastpagepic from "../imgs/symbols/lastpage.png";
import nextpagepic from "../imgs/symbols/nextpage.png";

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
      <span className={styles.pageelement}>
        <button
          className={styles.arrowBtn}
          onClick={() => {
            onPageChange(1);
          }}
        >
          <img src={gostartpic} alt="firstpage" width="20px" height="20px" />
        </button>
        <button
          className={styles.arrowBtn}
          onClick={() => {
            if (currentPage != 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          {" "}
          <img src={lastpagepic} alt="prepage" width="20px" height="20px" />
        </button>

        <span className={styles.pageBtn}>
          Seite {currentPage}/{pageNumbersList.length}
        </span>

        <button
          className={styles.arrowBtn}
          onClick={() => {
            if (currentPage != pageNumbersList.length) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          {" "}
          <img src={nextpagepic} alt="nextpage" width="20px" height="20px" />
        </button>
        <button
          className={styles.arrowBtn}
          onClick={() => {
            onPageChange(pageNumbersList.length);
          }}
        >
          {" "}
          <img src={goendpic} alt="lastpage" width="20px" height="20px" />
        </button>
      </span>
    </div>
  );
};

export default PaginationComp;
