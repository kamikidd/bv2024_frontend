import Container from "react-bootstrap/Container";
import StaffDetailCompLeft from "./StaffDetailCompLeft";
import StaffDetailCompRight from "./StaffDetailCompRight";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";

const StaffDetail = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const staffdetails = useQuery(
    ["staffdetails", `mitarbeitende/${state}`, ""],
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
