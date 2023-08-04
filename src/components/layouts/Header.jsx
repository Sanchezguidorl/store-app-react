import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoImg from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="">
      <Navbar
        id="navheader"
        expand="md"
        className="mb-3 py-2 bg-white sticky-top"
      >
        <Container>
          <Navbar.Brand>
            <i>
              <img
                id="logo-header"
                src={LogoImg}
                alt="Logo de tienda de calzados"
              />
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <i>
                  <img
                    src={LogoImg}
                    alt="Logo de la página en el menú desplegable"
                  />
                </i>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 align-items-md-center">
                <NavLink className="link-header" to={'/'}>Home</NavLink>
                <NavLink className="link-header mt-1 mt-md-0" to={'/about'}>About</NavLink>
                <NavLink className="link-header mt-1 mt-md-0" to={'/contact'}>Contact</NavLink>
                <Search/>
              <NavLink
                to='/cart/'
                className="cart-link p-2 rounded mt-2 mt-md-0 ms-md-2"
              >
                <FontAwesomeIcon
                  id="cart-icon"
                  icon={faCartShopping}
                  style={{ color: "#8db8b7" }}
                />
              </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
