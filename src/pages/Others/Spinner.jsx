import Container from "react-bootstrap/Container";
import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <Container className={`${styles.spinner_container}`}>
      <div className={`${styles.html_spinner}`}></div>
    </Container>
  );
};
export default Spinner;
