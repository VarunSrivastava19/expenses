import { Alert, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { validMonths } from "../utils/helper";
import { useEffect } from "react";

export const View = () => {
  const { month } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const expenses = location.state;
  useEffect(() => {
    if (!expenses) navigate("/query");
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
  const toastify = () => toast("Hmm");
  return (
    <>
      <Alert>
        Show data for month[string, length:3, format="MMM"] in URL in tabular
        form
      </Alert>
      <p>Data for month : {month}</p>
      <Button variant="outline-success" onClick={toastify}>
        Show Toast
      </Button>
    </>
  );
};
