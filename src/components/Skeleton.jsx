import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../contexts/Theme";
import { useContext } from "react";

export const Skeleton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <AppBar />
      <Container className="py-2 my-1" data-bs-theme={theme} bg={theme}>
        <Outlet />
      </Container>
    </>
  );
};
