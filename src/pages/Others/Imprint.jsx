import Container from "react-bootstrap/Container";
import styles from "../Contact/contact.module.css";

const Imprint = () => {
  return (
    <div>
      <Container className="categoryTitle">IMPRESSUM</Container>
      <Container>
        <div className={`${styles.title_data_protection}`}>
          Büro Vatter AG
          <br></br>
          Politikforschung & -beratung
        </div>
        <div className={`${styles.contact_info}`}>Gerberngasse 27</div>
        <div className={`${styles.contact_info}`}>CH-3011 Bern</div>
        <br></br>
        <div className={`${styles.contact_info}`}>+41 31 312 65 75</div>
        <br></br>
        <div
          className={`${styles.contact_info} ${styles.text_underline} ${styles.email_link}`}
        >
          <a href={`mailto:info@buerovatter.ch`}>info@buerovatter.ch</a>
        </div>
      </Container>
    </div>
  );
};

export default Imprint;
