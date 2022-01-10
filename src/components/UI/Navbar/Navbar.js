import DarkmodeToggle from "../Buttons/DarkmodeToggle";
import { useEffect, useState } from "react";
import { useTheme, useToggleDark } from "../../../store/darkmode-context";
import { useAuth } from "../../../store/auth-context";
import {
  Button,
  // Button,
  Container,
  // Form,
  // FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navi(props) {
  const { currentUser, signout } = useAuth();
  // console.log(currentUser?.email);
  const theme = useTheme();
  const TMode = useToggleDark();
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState("🌙");
  useEffect(() => {
    if (theme === true) {
      setMode("light");
      setIcon("☀️");
      document.body.style.background = "#121212";
      document.body.style.transition = "all 0.32s ease-out";
    } else {
      setMode("dark");
      setIcon("🌙");
      document.body.style.background = "white";
    }
  }, [theme]);
  let basketCountNumber = 1;
  return (
    <>
      <header
        className={`navbar navbar-expand-lg border-bottom bg-${
          !theme ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <>
            <Navbar.Brand as={NavLink} to="/">
              <div className={`navbar-brand text-${theme ? "light" : "dark"}`}>
                <h2>Can Tutar</h2>
              </div>
            </Navbar.Brand>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="ms-auto nav-item position-relative me-2">
                <>
                  <i
                    className={`fa fa-shopping-basket fa-fw fa-2x text-${
                      theme ? "light" : "dark"
                    }`}
                  />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {basketCountNumber}
                    <span className="visually-hidden">Shoping Basket</span>
                  </span>
                </>
              </li>
              <li>{currentUser?.email}</li>
            </ul>
          </>
        </div>
      </header>
      <Navbar
        bg={!theme ? "light" : "dark"}
        variant={!theme ? "light" : "dark"}
        expand="lg"
        sticky="top"
      >
        <Container fluid>
          {/* <Navbar.Brand href="#">
            <DarkmodeToggle icon={icon} mode={mode} clickEvent={TMode} />
          </Navbar.Brand> */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={!theme ? "light" : "dark"}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <DarkmodeToggle icon={icon} mode={mode} clickEvent={TMode} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" activeclassname="active">
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              {!currentUser ? (
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  disabled={currentUser}
                  activeclassname="active"
                >
                  Sign Up
                </Nav.Link>
              ) : (
                <Button type="button" onClick={signout}>
                  sign out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
