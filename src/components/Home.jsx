import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  errors && console.log(errors);
  // console.log(watch("name"));
  return (
    <>
      {errors.subject && <Alert variant="danger">
        Enter Subject
      </Alert>}
      {
        errors.paidOn && <Alert variant="danger">
          Enter Paid On Date
        </Alert>
      }
      {errors.amount && <Alert variant="danger">
        Enter Correct Amount
      </Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="subject" aria-label="Enter Subject">
          <Form.Label>Expense Subject</Form.Label>
          <Form.Control
            placeholder="Paid for...."
            {...register("subject", { required: true })}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="paidOn" aria-label="Expense Paid On">
          <Form.Label>Expense Paid On</Form.Label>
          <Form.Control
            type="date"
            {...register("paidOn", { required: true })}
            placeholder="Paid Amount On...."
          />
        </Form.Group>
        <Form.Group aria-label="Expense Amount">
          <Form.Label>Expense Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text id="rupee-symbol">₹</InputGroup.Text>
            <Form.Control
              id="amount"
              type="number"
              step={"any"}
              {...register("amount", { required: true, min:1 })}
            />
          </InputGroup>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
