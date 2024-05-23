import TopicTabComp from "./TopicTabComp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Topics = () => {
  const navigate = useNavigate();
  const topics = useQuery(["alltopics", "themen", ""], fetchData);
  if (topics.isLoading) {
    return <Spinner></Spinner>;
  }
  if (topics.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <Container className="categoryTitle">THEMEN</Container>
      <Container className="topics-content">
        <Row className="topic-row">
          {topics.data.map((topic) => (
            <Col
              xxl="auto"
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="topic-box"
              key={topic.id}
            >
              <Link
                to={`/Projekte?${createSearchParams({
                  Themen: topic.title.rendered,
                })}`}
              >
                <TopicTabComp
                  imgid={topic.acf.imgid}
                  picName={topic.title.rendered}
                ></TopicTabComp>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Topics;
