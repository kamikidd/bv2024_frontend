import { React } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import TitlePictureComp from "./TitlePictureComp";
import Container from "react-bootstrap/Container";
import bv_logo from "../../assets/imgs/logos/bv_logo.svg";
import side_logo from "../../assets/imgs/logos/side_logo.svg";
import { Navbar, Offcanvas } from "react-bootstrap";
const Header = () => {
  const location = useLocation();
  let page = location.pathname.substring(1);

  return (
    <Container fluid className="header_container">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top bg-white navbar-light flex-nowrap"
      >
        <Container className="align-items-end">
          <Navbar.Brand id="logo_nav_container">
            <Link to="/" className="navbar-brand">
              <img
                src={bv_logo}
                alt="logo"
                height="100px"
                className="main_logo"
              />
              <img
                src={side_logo}
                height="98px"
                alt="side_logo"
                className="side_logo align-bottom"
              />
            </Link>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              className="mb-2"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              backDrop="true"
              className="w-50"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-lg`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-end mb-2">
                <Nav className="navbar_column">
                  <Nav.Link
                    href="#/Dienstleistungen"
                    aria-current="page"
                    reloadDocument
                  >
                    Dienstleistungen
                  </Nav.Link>
                  <Nav.Link href="#/Mitarbeitende" reloadDocument>
                    Über uns
                  </Nav.Link>
                  <Nav.Link href="#/Themen" reloadDocument>
                    Themen
                  </Nav.Link>
                  <Nav.Link href="#/Projekte" reloadDocument>
                    Projekte
                  </Nav.Link>
                  <Nav.Link href="#/Kontakt" reloadDocument>
                    Kontakt
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className="title_pic_content">
        <TitlePictureComp page={page}></TitlePictureComp>
      </Container>
    </Container>
  );
};
export default Header;
