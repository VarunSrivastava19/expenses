import { useContext } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/Theme";
import { Link, NavLink } from "react-router-dom";

export const AppBar = () => {
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={theme} data-bs-theme={theme}>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link as={NavLink} to="/">Expense Tracker</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Item>
              <Nav.Link as={Link} to="/query">Extract</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form data-bs-theme={theme} className="d-flex">
            <Form.Switch
              onClick={themeToggle}
              role="switch"
              aria-checked={theme === "dark"}
              aria-label="Switch theme"
              title="Switch theme"
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
