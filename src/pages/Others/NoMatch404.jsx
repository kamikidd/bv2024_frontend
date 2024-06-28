import Container from "react-bootstrap/Container";
import pic404 from "../../assets/imgs/404.svg";
import { Link } from "react-router-dom";
const NoMatch404 = () => {
  return (
    <div>
      <Container className="error_pic_container">
        <img src={pic404} alt="errorpage" className="error_pic" />
      </Container>
      <Container className="error_pic_container">
        <div className="error_pic_message">
          Möchten Sie zur&nbsp;
          <Link to="/">Startseite</Link>&nbsp;zurückkehren?
        </div>
      </Container>
    </div>
  );
};

export default NoMatch404;
