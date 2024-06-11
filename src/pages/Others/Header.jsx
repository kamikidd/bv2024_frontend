import { useState, React } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TitlePictureComp from "./TitlePictureComp";

import Container from "react-bootstrap/Container";
import logopic from "../../assets/imgs/logos/BV_logo.png";
import sidelogpic from "../../assets/imgs/logos/side_logo.png";

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
          <Container className="align-items-end">
            <Container id="logo_nav_container">
              <Link to="/" className="navbar-brand">
                <img
                  id="logo_img1"
                  src={logopic}
                  alt="bv_logo"
                  width="266"
                  height="90"
                />
                <img
                  id="logo_img2"
                  src={sidelogpic}
                  alt="bv_logo"
                  width="233"
                  height="60"
                  className="align-bottom"
                />
              </Link>
            </Container>

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
            <Button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={handleShow}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
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
