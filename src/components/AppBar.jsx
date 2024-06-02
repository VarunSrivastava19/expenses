import { useContext } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/Theme";

export const AppBar = () => {
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={theme} data-bs-theme={theme}>
        <Container fluid>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0"></Nav>
          <Form data-bs-theme={theme} className="d-flex">
            <Form.Switch onChange={themeToggle}/>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
