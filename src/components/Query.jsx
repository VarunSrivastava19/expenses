import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDexie } from "../hooks/useDexie";
import { toast } from "react-toastify";
import { getFy, getMonth, notifyOps } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import { Buttons } from "./Buttons";

export const Query = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fetchExpenses } = useDexie();
  const onSubmit = async (data) => {
    const fy = getFy(data.startDate);
    try {
      const exps = await toast.promise(
        fetchExpenses(fy, {
          ...data,
        }),
        notifyOps("fetch")
      );
      // console.log(exps);
      navigate(`/show/${getMonth(data.startDate)}`, {
        state: {
          fy,
          expenses: exps,
        },
      });
    } catch (error) {
      console.log("[Query - onSubmit] Error -", error);
    }
  };
  // {errors.subject && <Alert variant="danger">Enter Subject</Alert>}
  return (
    <>
      {errors.startDate && (
        <Alert variant="danger">Enter Start Date (From)</Alert>
      )}
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
            {...register("subject", { required: false })}
            type="text"
          />
        </Form.Group>
        <Form.Group
          className="my-3"
          controlId="startDate"
          aria-label="From"
          aria-labelledby="fromLabel"
        >
          <Form.Label id="fromLabel">From</Form.Label>
          <Form.Control
            type="date"
            {...register("startDate", { required: true })}
            placeholder="From date...."
          />
        </Form.Group>
        <Form.Group
          className="my-3"
          controlId="endDate"
          aria-label="Till"
          aria-labelledby="endLabel"
        >
          <Form.Label id="endLabel">Till</Form.Label>
          <Form.Control
            type="date"
            {...register("endDate", { required: false })}
            placeholder="Till date...."
          />
        </Form.Group>
        <Buttons
          isLink={false}
          buttons={[
            {
              isPrimary: true,
              type: "submit",
              title: "Submit",
            },
            {
              isPrimary: false,
              type: "reset",
              title: "Reset",
              Bprops: {
                variant: "outline-warning",
              },
            },
          ]}
        />
      </Form>
    </>
  );
};
