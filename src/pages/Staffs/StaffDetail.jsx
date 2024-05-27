import Container from "react-bootstrap/Container";
import StaffDetailCompLeft from "./StaffDetailCompLeft";
import StaffDetailCompRight from "./StaffDetailCompRight";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../Others/Spinner";
import { useFetchMedia } from "../../utils/useFetchMedia";
import unknownstaff_pic from "../../assets/imgs/staffs/unknown.png";
const StaffDetail = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const media = useFetchMedia(state.acf.imgid, unknownstaff_pic);
  const staffdetails = useQuery(
    ["staffdetails", `mitarbeitende/${state.id}`, ""],
    fetchData
  );

  if (staffdetails.isLoading) {
    return <Spinner></Spinner>;
  }
  if (staffdetails.isError) {
    navigate("/NotMatch404");
  }
  return (
    <div>
      <Container className="categoryTitle">MITARBEITENDE</Container>

      <Container className="staff-detail">
        <Row>
          <Col xl={4}>
            <StaffDetailCompLeft
              staff={staffdetails.data}
              img={media}
            ></StaffDetailCompLeft>
          </Col>
          <Col xl={8}>
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
