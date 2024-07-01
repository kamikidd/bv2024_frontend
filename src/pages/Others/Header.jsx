import { React, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation, NavLink } from "react-router-dom";
import TitlePictureComp from "./TitlePictureComp";
import Container from "react-bootstrap/Container";
import bv_logo from "../../assets/imgs/logos/bv_logo.svg";
import side_logo from "../../assets/imgs/logos/side_logo.svg";
import { Navbar, Offcanvas } from "react-bootstrap";
const Header = () => {
  const location = useLocation();
  let page = location.pathname.substring(1);
  const offCanvasRef = useRef();

  function closeOffCanvas() {
    if (offCanvasRef.current.backdrop) {
      offCanvasRef.current.backdrop.click();
    }
  }
  return (
    <Container fluid className="header_container">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fixed-top bg-white navbar-light flex-nowrap"
      >
        <Container className="align-items-end header_nav_content">
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
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="mb-2"
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbar-expand-lg"
            placement="end"
            className="w-50"
            ref={offCanvasRef}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbar-expand-lg"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end mb-2">
              <Nav className="navbar_column nav-item">
                <NavLink
                  reloaddocument="true"
                  className="nav-link"
                  aria-current="page"
                  to="/Dienstleistungen"
                  onClick={closeOffCanvas}
                >
                  Dienstleistungen
                </NavLink>

                <NavLink
                  reloaddocument="true"
                  to="/Mitarbeitende"
                  className="nav-link"
                  onClick={closeOffCanvas}
                >
                  Über uns
                </NavLink>

                <NavLink
                  reloaddocument="true"
                  to="/Themen"
                  className="nav-link"
                  onClick={closeOffCanvas}
                >
                  Themen
                </NavLink>

                <NavLink
                  reloaddocument="true"
                  to="/Projekte"
                  className="nav-link"
                  onClick={closeOffCanvas}
                >
                  Projekte
                </NavLink>

                <NavLink
                  reloaddocument="true"
                  to="/Kontakt"
                  className="nav-link"
                  onClick={closeOffCanvas}
                >
                  Kontakt
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Container fluid className="title_pic_content">
        <TitlePictureComp page={page}></TitlePictureComp>
      </Container>
    </Container>
  );
};
export default Header;
