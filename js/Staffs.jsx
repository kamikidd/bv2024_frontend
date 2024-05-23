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
          {staffs.data.map((staff) =>
            staff.title.rendered == "Adrian Vatter" ? (
              ""
            ) : (
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                className="staff-box"
                key={staff.id}
              >
                <Link
                  to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}`}
                  state={staff}
                >
                  <StaffPicComp
                    imgid={staff.acf.imgid}
                    staffName={staff.title.rendered}
                    position={staff.acf.position}
                    id={staff.title.rendered}
                  ></StaffPicComp>
                </Link>
              </Col>
            )
          )}
        </Row>
      </Container>
      <Container className="categoryTitle">VERWALTUNGSRAT</Container>
      <Container className="staffs-content">
        <Row className="staff-row">
          {staffs.data.map((staff) =>
            staff.title.rendered != "Adrian Vatter" ? (
              ""
            ) : (
              <Row key={staff.id} className="staff-row">
                <Col xl={4} key={staff.id} className="staff-box">
                  {/* <Link
                    to={`/Mitarbeitende/${deUmlaut(staff.title.rendered)}`}
                    state={staff}
                  > */}
                  <StaffPicComp
                    imgid={staff.acf.imgid}
                    staffName={staff.title.rendered}
                    position={staff.acf.position}
                    id={staff.title.rendered}
                  ></StaffPicComp>
                  {/* </Link> */}
                </Col>
                <Col className="my-auto staff-box">
                  Adrian Vatter ist Gründer des Büros und seit 2008 Präsident
                  des Verwaltungsrates. Er ist seit 2009 Inhaber des Lehrstuhls
                  für Schweizer Politik am Institut für Politikwissenschaft der
                  Universität Bern. Seit 1994 hat er für diverse Stellen der
                  Bundesverwaltung sowie für kantonale und kommunale Behörden
                  zahlreiche Forschungs- und Beratungsmandate wahrgenommen.
                </Col>
              </Row>
            )
          )}
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Staffs;
