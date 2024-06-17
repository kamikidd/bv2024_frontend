import { useState, React } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TitlePictureComp from "./TitlePictureComp";
import Container from "react-bootstrap/Container";
import bv_logo from "../../assets/imgs/logos/bv_logo.svg";
import side_logo from "../../assets/imgs/logos/side_logo.svg";

const Header = () => {
  const location = useLocation();
  let page = location.pathname.substring(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="header_container">
      <Container>
        <Nav className="border-bottom navbar fixed-top bg-white navbar-expand-lg navbar-light flex-nowrap">
          <Container>
            <Container id="logo_nav_container">
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
            </Container>

            <div className="btn_container">
              <Button
                className="navbar-toggler custom-toggler "
                type="button"
                onClick={handleShow}
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="nav_btn" className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      reloadDocument
                      activeclassname="active"
                      className="nav-link"
                      aria-current="page"
                      to="/Dienstleistungen"
                    >
                      Dienstleistungen
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      reloadDocument
                      to="/Mitarbeitende"
                      activeclassname="active"
                      className="nav-link "
                    >
                      Über uns
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      reloadDocument
                      to="/Themen"
                      activeclassname="active"
                      className="nav-link"
                    >
                      Themen
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      reloadDocument
                      to="/Projekte"
                      activeclassname="active"
                      className="nav-link"
                    >
                      Projekte
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      reloadDocument
                      to="/Kontakt"
                      activeclassname="active"
                      className="nav-link"
                    >
                      Kontakt
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <Modal show={show} onHide={handleClose} className="modal show">
              <Modal.Dialog className="modal-dialog" role="document">
                <div className="modal-content">
                  <Modal.Header
                    closeButton
                    className="modal-header"
                  ></Modal.Header>
                  <Modal.Body>
                    <ul className="navbar-nav">
                      <li>
                        <NavLink
                          reloadDocument
                          activeclassname="active"
                          className="modalNav"
                          aria-current="page"
                          to="/Dienstleistungen"
                        >
                          Dienstleistungen
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          reloadDocument
                          to="/Mitarbeitende"
                          activeclassname="active"
                          className="modalNav"
                        >
                          Über uns
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          reloadDocument
                          to="/Themen"
                          activeclassname="active"
                          className="modalNav"
                        >
                          Themen
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          reloadDocument
                          to="/Projekte"
                          activeclassname="active"
                          className="modalNav"
                        >
                          Projekte
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          reloadDocument
                          to="/Kontakt"
                          activeclassname="active"
                          className="modalNav"
                        >
                          Kontakt
                        </NavLink>
                      </li>
                    </ul>
                  </Modal.Body>
                </div>
              </Modal.Dialog>
            </Modal>
          </Container>
        </Nav>
      </Container>

      <Container fluid className="title_pic_content">
        <TitlePictureComp page={page}></TitlePictureComp>
      </Container>
    </Container>
  );
};
export default Header;
