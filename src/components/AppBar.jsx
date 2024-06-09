import { useContext } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/Theme";
import { Link, NavLink } from "react-router-dom";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const AppBar = () => {
  const isAuthenticated = useIsAuthenticated();
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <>
      <Navbar expand="lg" bg={theme} data-bs-theme={theme}>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link as={NavLink} to="/">
              Expense Tracker
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Item>
                <Nav.Link as={Link} to="/query">
                  Extract
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Form data-bs-theme={theme} className="d-flex justify-content-end align-items-center">
              <Nav.Item className="mx-2 px-4">
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
              </Nav.Item>
              <Form.Switch
                onClick={themeToggle}
                role="switch"
                aria-checked={theme === "dark"}
                aria-label="Switch theme"
                title="Switch theme"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
