import { Button, Form } from "react-bootstrap";
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
  console.log(watch("name"));
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="name" aria-label="Enter Name">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control
          placeholder="Your Name is...."
          {...register("name")}
          type="text"
        />
      </Form.Group>
      <Form.Group controlId="email" aria-label="Enter Email">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" {...register("email", {required: true})} placeholder="Your Email is...." />
        {errors.email && <span>Email is a required field</span>}
      </Form.Group>
      <Button variant="outline-primary" type="submit">Submit</Button>
    </Form>
  );
};
