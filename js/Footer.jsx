import { React } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import linkedin_logo from "../imgs/logos/linkedin_logo_l.png";
const Footer = () => {
  return (
    <Container fluid className="border-top footer ">
      <Container className="text-center ">
        <div className="row flex-row-reverse">
          <section id="infos" className="col-xxl-6 footertext text-xxl-end">
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
            id="copyright"
            className="col-xxl-3 text-xxl-start text-nowrap"
          >
            © 2023 Büro Vatter
          </section>
        </div>
      </Container>
    </Container>
  );
};
export default Footer;
