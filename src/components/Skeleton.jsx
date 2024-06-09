import { Outlet } from "react-router-dom";
// import { loginRequest } from "./authConfig";
// import { callMsGraph } from "./graph";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

import { AppBar } from "./AppBar";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../contexts/Theme";
import { useContext } from "react";
// import { loginRequest } from "../authConfig";
// import { callMsGraph } from "../graph";
import { Jumbotron } from "./Jumbotron";

export const Skeleton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <AppBar />
      <Container className="py-2 my-1" data-bs-theme={theme} bg={theme}>
        <UnauthenticatedTemplate>
          <Jumbotron
            heading="Log In"
            leadText="Click Sign In button to continue"
            buttons={[]}
          />
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <Outlet />
        </AuthenticatedTemplate>
      </Container>
    </>
  );
};
