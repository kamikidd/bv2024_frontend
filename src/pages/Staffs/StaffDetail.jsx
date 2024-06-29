import Container from "react-bootstrap/Container";
import StaffDetailCompLeft from "./StaffDetailCompLeft";
import StaffDetailCompRight from "./StaffDetailCompRight";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../Others/Spinner";
import unknownstaff_pic from "../../assets/imgs/staffs/unknown.png";

const StaffDetail = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const media = useQuery(["service_pic", `media`, state.acf.imgid], fetchData);
  const staffdetails = useQuery(
    ["staffdetails", `mitarbeitende/${state.id}`, ""],
    fetchData,
  );
  if (media.isLoading) {
    return <Spinner></Spinner>;
  }
  if (media.isError) {
    navigate("/NotMatch404");
  }
  if (staffdetails.isLoading) {
    return <Spinner></Spinner>;
  }
  if (staffdetails.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <Container className="categoryTitle">MITARBEITENDE</Container>

      <Container>
        <Row>
          <Col lg={4} md={5}>
            <StaffDetailCompLeft
              staff={staffdetails.data}
              img={media.data.source_url ?? unknownstaff_pic}
            ></StaffDetailCompLeft>
          </Col>
          <Col lg={8} md={7} xs={12}>
            <StaffDetailCompRight
              staff={staffdetails.data}
            ></StaffDetailCompRight>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaffDetail;
