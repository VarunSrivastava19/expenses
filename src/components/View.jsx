import { Alert, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { validMonths } from "../utils/helper";
import { useEffect } from "react";
import { Jumbotron } from "./Jumbotron";

export const View = () => {
  const { month } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { expenses, fy } = location.state;
  useEffect(() => {
    if (!(expenses || fy)) navigate("/query");
  });
  if (!validMonths(month))
    return (
      <>
        <Alert variant="danger">
          Incorrect month passed.
          <hr />
          <Button variant="outline-secondary" as={Link} to="/">
            Home
          </Button>
        </Alert>
      </>
    );
  
  console.log("[View] Expenses - ", expenses);
  return (
    <Jumbotron
      heading={`FY ${fy}`}
      leadText={`Expenses for ${fy}`}
      buttons={[
        {
          isPrimary: false,
          title: "Go home",
          to: "/",
        },
        {
          isPrimary: true,
          title: "Go Extract",
          to: "/query",
        },
      ]}
    />
  );
};
