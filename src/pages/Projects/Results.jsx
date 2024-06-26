import Project from "./Project";
import styles from "./projects.module.css";
import { useState, useEffect } from "react";
import PaginationComp from "./PaginationComp";

const Results = ({ projects, istlaufend, projectStatus, filterApplied }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const currentPosts = projects.slice(
    currentPage * postsPerPage - postsPerPage,
    currentPage * postsPerPage,
  );
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (filterApplied) {
      setCurrentPage(1);
    }
  }, [filterApplied]);

  if (projects.length == 0) {
    return (
      <div className={styles.no_project_msg}>
        Kein {projectStatus == "laufend" ? "laufendes" : ""} Projekt gefunden.
      </div>
    );
  }
  return (
    <div>
      {currentPosts.map((project) => {
        return (
          <Project
            key={project.id}
            title={project.title.rendered}
            laufzeit={project.acf.Jahr}
            auftraggeber={project.acf.auftraggeber}
            laufend={project.istlaufend == istlaufend}
            detail={project}
          ></Project>
        );
      })}
      <div className={styles.pageline}>
        <PaginationComp
          pageCount={projects.length}
          postsPerPage={postsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        ></PaginationComp>
      </div>
    </div>
  );
};
export default Results;
