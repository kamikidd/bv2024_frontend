import Container from "react-bootstrap/Container";
import StaffPicComp from "./StaffPicComp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Spinner from "./Spinner";
import { deUmlaut } from "./helpers";
import founder_pic from "../imgs/staffs/7.png";
const Staffs = () => {
  const navigate = useNavigate();
  const staffs = useQuery(["staffs", "mitarbeitende", ""], fetchData);
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
        id="about"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(staff_intro.data.content.rendered),
        }}
      ></Container>
      <Container className="categoryTitle">MITARBEITENDE</Container>
      <Container className="staffs-content">
        <Row className="staff-row">
          {staffs.data.map((staff) => (
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              className="staff-box"
              key={staff.id}
            >
              {staff.title.rendered}
              <Link
                to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}`}
                state={staff.id}
              >
                {staff.title.rendered == "Adrian Vatter" ? (
                  ""
                ) : (
                  <StaffPicComp
                    imgid={staff.acf.imgid}
                    staffName={staff.title.rendered}
                    position={staff.acf.position}
                    id={staff.title.rendered}
                  ></StaffPicComp>
                )}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="categoryTitle">VERWALTUNGSRAT</Container>
      <Container className="staffs-content">
        <Row>
          {staffs.data.map((staff) => (
            <Col
              // xl={4}
              // lg={4}
              // md={6}
              // sm={12}
              className="staff-box"
              key={staff.id}
            >
              {/* <Link
                to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}`}
                state={staff.id}
              > */}
              {staff.title.rendered == "Adrian Vatter" ? (
                <StaffPicComp
                  imgid={staff.acf.imgid}
                  staffName={staff.title.rendered}
                  position={staff.acf.position}
                  id={staff.title.rendered}
                ></StaffPicComp>
              ) : (
                ""
              )}
              {/* </Link> */}
            </Col>
          ))}

          {/* <Col className="staff-box">
            <StaffPicComp
              imgid={founder_pic}
              staffName={"Adrian Vatter"}
              position={"Präsident des Verwaltungsrats"}
            ></StaffPicComp>
          </Col> */}
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Staffs;
