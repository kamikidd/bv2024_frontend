import { useState, React } from "react";
// import Nav from "react-bootstrap/Nav";
import { NavLink, Link, useLocation } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import TitlePictureComp from "../Others/TitlePictureComp";
import { Sidebar } from "flowbite-react";
// import Container from "react-bootstrap/Container";
import logo_sidelogo from "../../assets/imgs/logos/logos.png";
import main_logo from "../../assets/imgs/logos/BV_logo.png";
import { CloseButton } from "react-bootstrap";

const Header = () => {
  const location = useLocation();
  let page = location.pathname.substring(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 start-0 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto flex-nowrap lg:items-end">
          <Link
            to="/"
            className="flex flex-wrap items-center pb-4 space-x-3 rtl:space-x-reverse"
          >
            <img
              // className="left-0 h-12 w-36 xl:h-20 xl:w-64" //w266px,h90px  w-46 h-14 //h-20 w-64 //h-12 w-36
              className="left-0 h-14 w-46 xs:hidden"
              src={main_logo}
              alt="main_logo"
            />
            <img
              src={logo_sidelogo}
              alt="logos"
              className="max-xs:hidden sm:h-16 md:h-24" //w233px, h60px md:h-16 md:w-60 xl:-mb-6
            />
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <div className="text-center">
              <button
                className="flex items-center justify-center h-10 p-1 border-2 rounded-md w-14 border-theme-red text-theme-red hover:bg-red-700/20 hover:shadow-sm lg:hidden hover:shadow-red-600/60"
                type="button"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
              ></button>
            </div>
          </div>
          <div
            id="drawer-right-example"
            className="fixed top-0 right-0 z-40 w-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-red-200 dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="drawer-right-label"
          >
            <h5
              id="drawer-right-label"
              className="inline-flex items-center mb-4 text-xl font-semibold uppercase text-theme-red font-Barlow_Condensed dark:text-gray-400"
            >
              MENU
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div
              className="items-center justify-between w-full lg:order-1 lg:flex lg:w-auto"
              id="drawer-right-example"
            >
              <ul className="p-4 mb-3 font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <NavLink
                    reloadDocument
                    activeclassname="active"
                    className="text-xl uppercase text-theme-red font-Barlow_Condensed "
                    aria-current="page"
                    to="/Dienstleistungen"
                  >
                    Dienstleistungen
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    reloadDocument
                    to="/Mitarbeitende"
                    activeclassname="active"
                    className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                  >
                    Über uns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    reloadDocument
                    to="/Themen"
                    activeclassname="active"
                    className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                  >
                    Themen
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    reloadDocument
                    to="/Projekte"
                    activeclassname="active"
                    className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                  >
                    Projekte
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    reloadDocument
                    to="/Kontakt"
                    activeclassname="active"
                    className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 start-0 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto flex-nowrap lg:items-end">
          <Link
            to="/"
            className="flex flex-wrap items-center pb-4 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="left-0 w-44 h-14 xl:h-20 xl:w-64" //w266px,h90px
              src={logopic}
              alt="bv_logo"
            />
            <img
              src={sidelogpic}
              alt="bv_logo"
              className="min-[100px]:max-[488px]:hidden  min-[489px]:max-sm:h-12 min-[489px]:max-sm:w-48 min-[489px]:max-sm:-mb-4 ml-4 sm:max-xl:-mb-4 sm:max-xl:h-12 sm:max-xl:w-48 xl:-mb-6" //w233px, h60px md:h-16 md:w-60 xl:-mb-6
            />
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="flex items-center justify-center h-10 p-1 border-2 rounded-md w-14 border-theme-red text-theme-red hover:bg-red-700/20 hover:shadow-sm lg:hidden hover:shadow-red-600/60"
              aria-controls="navbar-default"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full lg:order-1 lg:flex lg:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mb-3 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="">
                <NavLink
                  reloadDocument
                  activeclassname="active"
                  className="text-xl uppercase text-theme-red font-Barlow_Condensed "
                  aria-current="page"
                  to="/Dienstleistungen"
                >
                  Dienstleistungen
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Mitarbeitende"
                  activeclassname="active"
                  className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                >
                  Über uns
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Themen"
                  activeclassname="active"
                  className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                >
                  Themen
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Projekte"
                  activeclassname="active"
                  className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                >
                  Projekte
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Kontakt"
                  activeclassname="active"
                  className="block text-xl uppercase text-theme-red font-Barlow_Condensed"
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/*</div>
     <div className="container">
      <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 start-0 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <div className="container relative flex items-center h-24 p-0 m-0 space-x-3 rtl:space-x-reverse">
            <div className="absolute bottom-0">
              <Link to="/">
                <img
                  className="left-0 inline w-64 h-20" //w266px,h90px
                  src={logopic}
                  alt="bv_logo"
                />
                <img
                  src={sidelogpic}
                  alt="bv_logo"
                  className="inline h-16 ml-4 -mb-6 left-64 w-60" //w233px, h60px
                />
              </Link>
            </div>
          </div>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
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
              <li>
                <NavLink
                  reloadDocument
                  to="/Mitarbeitende"
                  activeclassname="active"
                  className="nav-link "
                >
                  Über uns
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Themen"
                  activeclassname="active"
                  className="nav-link"
                >
                  Themen
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  to="/Projekte"
                  activeclassname="active"
                  className="nav-link"
                >
                  Projekte
                </NavLink>
              </li>
              <li>
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
      </nav> */}

      {/* <Nav
          className="bg-white border-bottom navbar fixed-top navbar-expand-lg navbar-light flex-nowrap"
        >
          <Container id="header" className=" align-items-end">
            <Container id="logo">
              <Link to="/" className="navbar-brand">
                <img
                  id="logoimg1"
                  src={logopic}
                  alt="bv_logo"
                  width="266"
                  height="90"
                />
                <img
                  id="logoimg2"
                  src={sidelogpic}
                  alt="bv_logo"
                  width="233"
                  height="60"
                  className="align-bottom"
                />
              </Link>
            </Container>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul id="navbtn" className="navbar-nav">
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
        </Nav> */}

      {/* <div className="mt-3 2xl:container 2xl:mx-auto">
        <TitlePictureComp page={page}></TitlePictureComp>
      </div> */}
    </div>
  );
};
export default Header;
