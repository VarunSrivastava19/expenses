// import { Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const linkStyle = `
  link-home 
  link-offset-2 
  link-offset-3-hover 
  link-underline 
  link-underline-opacity-0 
  link-underline-opacity-100-hover
`;
export const Custom404 = () => (
  <Container className="d-flex flex-column justify-content-center align-items-center mx-auto my-5">
    <h1 className="display-1 text-center">404</h1>
    <p className="text-center">Oops! Nothing was found.</p>
    <p className="text-center">
      The page you are looking for might have been removed or is temporarily
      unavailable.{" "}
      <Link to="/" className={linkStyle}>
        Return to homepage
      </Link>
      .
    </p>
  </Container>
);
