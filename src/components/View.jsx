import { Alert, Button } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { validMonths } from "../utils/helper";
import { Jumbotron } from "./Jumbotron";
import { DataTable } from "./DataTable";
import Alerter from "./Alerter";

export const View = () => {
  const { month } = useParams();
  const location = useLocation();
  const { state } = location;
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

  if (!("state" in location || "fy" in location)) {
    console.log(state);
    return <Alerter heading="Expenses not found" severity="danger" />;
  }
  return (
    <>
      <Jumbotron
        heading={`FY ${state.fy}`}
        leadText={`Expenses for ${state.fy}`}
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
      <DataTable
        expenses={state.expenses}
        rest={{ box: {}, table: { className: "m-0 p-0" } }}
      />
    </>
  );
};
