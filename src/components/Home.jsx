import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDexie } from "../hooks/useDexie";
import { getFy, notifyOps } from "../utils/helper";

export const Home = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { saveExpense } = useDexie();
  const onSubmit = async (data) => {
    const fy = getFy();
    try {
      await toast.promise(saveExpense(fy, data), notifyOps("save"));
    } catch (error) {
      console.log("[Home - onSubmit] Error -", error);
    }
  };
  errors && console.log(errors);
  return (
    <>
      {errors.subject && <Alert variant="danger">Enter Subject</Alert>}
      {errors.paidOn && <Alert variant="danger">Enter Paid On Date</Alert>}
      {errors.amount && <Alert variant="danger">Enter Correct Amount</Alert>}
      <Form className="mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="my-3"
          controlId="subject"
          aria-label="Enter Subject"
          aria-labelledby="subLabel"
        >
          <Form.Label id="subLabel">Expense Subject</Form.Label>
          <Form.Control
            placeholder="Paid for...."
            {...register("subject", { required: true })}
            type="text"
          />
        </Form.Group>
        <Form.Group
          className="my-3"
          controlId="paidOn"
          aria-label="Expense Paid On"
          aria-labelledby="subLabel"
        >
          <Form.Label id="paidLabel">Expense Paid On</Form.Label>
          <Form.Control
            type="date"
            {...register("paidOn", { required: true })}
            placeholder="Paid Amount On...."
          />
        </Form.Group>
        <Form.Group
          className="my-3"
          aria-label="Expense Amount"
          aria-labelledby="expenseLabel"
        >
          <Form.Label id="expenseLabel">Expense Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text id="rupee-symbol">₹</InputGroup.Text>
            <Form.Control
              id="amount"
              type="number"
              step={"any"}
              {...register("amount", { required: true, min: 1 })}
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
