import { React } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import linkedin_logo from "../../assets/imgs/logos/linkedin_logo_l.png";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <Container fluid className={`border-top ${styles.footer}`}>
      <Container className="text-center">
        <div className="row flex-row-reverse">
          <section className={`col-xxl-6 text-xxl-end ${styles.footer_text}`}>
            <span>
              <Link to="/Kontakt">Kontakt</Link>&nbsp; | &nbsp;
              <Link to="/Imprint">Impressum</Link>&nbsp; | &nbsp;
              <Link to="/DataProtection">Datenschutzerklärung</Link>
            </span>
          </section>
          <section id="LinkedIn" className="col-xxl-3 mb-md-2">
            <a href="https://www.linkedin.com/company/buerovatter-politikanalyse/">
              <img
                src={linkedin_logo}
                alt="linkedin"
                width="90px"
                height="22px"
              />
            </a>
          </section>
          <section
            className={`col-xxl-3 text-xxl-start text-nowrap ${styles.copyright}`}
          >
            © 2024 Büro Vatter
          </section>
        </div>
      </Container>
    </Container>
  );
};
export default Footer;
