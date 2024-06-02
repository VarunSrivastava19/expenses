import { Alert, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const View = () => {
  const { month } = useParams();
  const toastify = () => toast("Hmm")
  return (
    <>
      <Alert>
        Show data for month[string, length:3, format="MMM"] in URL in tabular
        form
      </Alert>
      <p>Data for month : {month}</p>
      <Button variant="outline-success" onClick={toastify}>Show Toast</Button>
    </>
  );
};
