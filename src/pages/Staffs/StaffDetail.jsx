import Container from "react-bootstrap/Container";
import StaffDetailCompLeft from "./StaffDetailCompLeft";
import StaffDetailCompRight from "./StaffDetailCompRight";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utils/fetchData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../Others/Spinner";
import { useParams } from "react-router-dom";
const StaffDetail = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();
  const staffdetails = useQuery(
    ["staffdetails", `mitarbeitende/${id}`, ""],
    fetchData,
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

      <Container>
        <Row>
          <Col lg={4} md={5}>
            <StaffDetailCompLeft
              staff={staffdetails.data}
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
