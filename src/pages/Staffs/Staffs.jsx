import Container from "react-bootstrap/Container";
import StaffPicComp from "./StaffPicComp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Spinner from "../Others/Spinner";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { deUmlaut } from "../../utils/helpers";
import styles from "./staffs.module.css";
const Staffs = () => {
  const navigate = useNavigate();
  const staffs = useQuery(["staffs", "mitarbeitende", ""], fetchData);
  //28919 is id of post
  const staff_intro = useQuery(["landingIntro", "pages/28919", ""], fetchData);

  if (staffs.isLoading || staff_intro.isLoading) {
    return <Spinner></Spinner>;
  }
  if (staffs.isError || staff_intro.isError) {
    navigate("/NotMatch404");
  }

  return (
    <div>
      <Container className="categoryTitle">ÜBER UNS</Container>
      <Container
        className={`${styles.about}`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(staff_intro.data.content.rendered),
        }}
      ></Container>
      <Container className="categoryTitle">MITARBEITENDE</Container>
      <Container>
        <Row className={`${styles.staff_row}`}>
          {staffs.data.map((staff) =>
            staff.title.rendered == "Adrian Vatter" ? (
              ""
            ) : (
              <Col xl={4} lg={4} md={6} sm={12} className="pb-5" key={staff.id}>
                <Link
                  to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}/${staff.id}`}
                >
                  <StaffPicComp
                    imgid={staff.acf.imgid}
                    staffName={staff.title.rendered}
                    position={staff.acf.position}
                    id={staff.title.rendered}
                  ></StaffPicComp>
                </Link>
              </Col>
            ),
          )}
        </Row>
      </Container>
      <Container className="categoryTitle">VERWALTUNGSRAT</Container>
      <Container className="mb-3">
        <Row className={`${styles.funder_row}`}>
          {staffs.data.map((staff) =>
            staff.title.rendered != "Adrian Vatter" ? (
              ""
            ) : (
              <Row key={staff.id} className="px-0 mx-0">
                <Col lg={4} md={6} className={`${styles.funder_col}`}>
                  <Link
                    to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}/${staff.id}`}
                  >
                    <StaffPicComp
                      imgid={staff.acf.imgid}
                      staffName={staff.title.rendered}
                      position={staff.acf.position}
                      id={staff.title.rendered}
                    ></StaffPicComp>
                  </Link>
                </Col>
                <Col lg={8} md={6} className={`my-auto ${styles.about} `}>
                  <p
                    className={`${styles.funder_info}`}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(staff.content.rendered),
                    }}
                  ></p>
                </Col>
              </Row>
            ),
          )}
        </Row>
      </Container>

      <br />
      <br />
    </div>
  );
};

export default Staffs;
