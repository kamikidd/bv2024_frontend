import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Results from "./Results";
import { useState } from "react";
import ErrorBoundary from "../../utils/ErrorBoundary";
import {
  getistLaufendId,
  filteredData,
  filterIstLaufendProjects,
} from "../../utils/helpers";
import styles from "./projects.module.css";

import Spinner from "../Others/Spinner";
import SelectComp from "./SelectComp";
import SearchInputComp from "./SearchInputComp";
const Projects = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // ----------Input filter----------
  const [titleName, setTitleName] = useState("");
  const [selectedService, setSelectedService] = useState(undefined);
  const [selectedTopic, setSelectedTopic] = useState(
    param.id == "laufend" ? undefined : searchParams.get("Themen")
  );

  const [filterLaufend, setFilterLaufend] = useState(
    param.id == "laufend" ? true : false
  );
  const [isClear, setIsClear] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  //----------Topic Select filter----------
  function handleSelectedTopic(data) {
    setSelectedTopic(data);
    setSearchParams((searchParams) => {
      if (data == undefined) {
        searchParams.delete("Themen");
      } else {
        searchParams.append("Themen", data); // <-- append key-value pair
      }
      return searchParams;
    });

    setIsFiltered(true);
  }
  function handleSelectedService(data) {
    setSelectedService(data);

    setSearchParams((searchParams) => {
      if (data == undefined) {
        searchParams.delete("Dienstleistungen");
      } else {
        searchParams.append("Dienstleistungen", data); // <-- append key-value pair
      }
      return searchParams;
    });
    setIsFiltered(true);
  }
  function handleClearStatus() {
    setIsClear(false);
    setIsFiltered(false);
  }
  function setTitle(data) {
    setTitleName(data);
    setSearchParams((searchParams) => {
      if (data == "") {
        searchParams.delete("Titel");
      } else {
        searchParams.delete("Titel");
        searchParams.append("Titel", data); // <-- append key-value pair
      }
      return searchParams;
    });
    setIsFiltered(data);
  }

  function refresh() {
    setIsClear(true);
    setFilterLaufend(false);
    setSelectedTopic(undefined);
    setSelectedService(undefined);
    setTitleName("");
    setIsFiltered(false);
    navigate("/Projekte");
  }

  const projects = useQuery(["allprojects", `projekte`, ""], fetchData);
  const topics = useQuery(["alltopics", "themen", ""], fetchData);
  const services = useQuery(["services", "dienstleistungen", ""], fetchData);
  const istlaufend = useQuery(["istlaufend", "istlaufend", ""], fetchData);

  if (
    projects.isLoading ||
    topics.isLoading ||
    services.isLoading ||
    istlaufend.isLoading
  ) {
    return <Spinner></Spinner>;
  }

  if (
    projects.isError ||
    topics.isError ||
    services.isError ||
    istlaufend.isError
  ) {
    navigate("/NotMatch404");
  }
  let laufendId = getistLaufendId(istlaufend.data, "Ja");
  const result_laufend = filterIstLaufendProjects(projects.data, istlaufend);

  let projects_before_filtered = filterLaufend ? result_laufend : projects.data;

  const filteredItems = projects_before_filtered.filter(
    (project) =>
      project.title.rendered.toLowerCase().indexOf(titleName.toLowerCase()) !==
      -1
  );

  const result = filteredData(
    topics,
    services,
    filteredItems,
    filterLaufend ? result_laufend : projects.data,
    selectedService,
    selectedTopic,
    titleName
  );

  return (
    <div>
      <Container className="categoryTitle">PROJEKTE</Container>

      <Container>
        <Row>
          <Col xxl={4}>
            <SearchInputComp
              onChange={setTitle}
              isClear={isClear}
              isCleared={handleClearStatus}
            ></SearchInputComp>
            <br />

            <div className="filter_label">
              Filtern nach Thema:<br></br>
              <SelectComp
                isPreSelected={selectedTopic ?? undefined}
                value={selectedTopic ?? "Alle Themen"}
                options={topics.data}
                onChange={handleSelectedTopic}
                isClear={isClear}
                isCleared={handleClearStatus}
              ></SelectComp>
            </div>
            <div className="filter_label">
              Filtern nach Dienstleistung:<br></br>
              <SelectComp
                isPreSelected={selectedService ?? undefined}
                value={selectedService ?? "Alle Dienstleistungen"}
                options={services.data}
                onChange={handleSelectedService}
                isClear={isClear}
                isCleared={handleClearStatus}
              ></SelectComp>
            </div>
          </Col>

          <Col xxl={8} xl={12}>
            <div
              className={`${styles.container} 
                  ${result.length == projects.data.length ? "" : styles.withbtn}
                `}
            >
              <span className={styles.text}>
                {result.length == projects.data.length
                  ? "Alle Projekte"
                  : `${result.length} Projekte gefunden.`}
              </span>
              <button
                className={`${styles.resetBtn} 
                  ${result.length == projects.data.length ? "" : styles.show}
                `}
                onClick={refresh}
              >
                Filter zurücksetzen
              </button>
            </div>
            <hr className={styles.hr} />
            <Results
              projects={result}
              istlaufend={laufendId}
              filterApplied={isFiltered}
            ></Results>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function ProjectsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Projects {...props}></Projects>
    </ErrorBoundary>
  );
}

export default ProjectsErrorBoundary;
