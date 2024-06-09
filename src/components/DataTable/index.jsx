import { Table } from "react-bootstrap";
import TableBox from "./TableBox";
import { headers } from "../../utils/helper";
import Alerter from "../../Alerter";

/**
 * @typedef {Object} Expense
 * @property {string} subject Subject of the expense.
 * @property {Date|string} paidOn The date at which the expense was paid.
 * @property {number} amount The amount of expense in INR.
 * @property {number} id The ID of that row.
 *
 * @param {Object} props Table props.
 * @param {Array<Expense>} props.expenses List of buttons.
 * @param {Object} rest props
 * @param {Object} rest.box Box props for inner <div>.
 * @param {Object} rest.table Table props for inner <Table>.
 * @returns {JSX.Element}
 */
export const DataTable = ({ expenses, rest }) => {
  if (expenses.length === 0)
    return (
      <Alerter
        heading={"404 Not Found"}
        message="No matching record found for the provided criteria"
        severity="danger"
        rest={{className: "my-4"}}
      />
    );
  return (
    <TableBox {...rest.box}>
      <Table {...rest.table} hover responsive="md">
        <thead>
          <tr>
            {headers.map((colHead, idx) => (
              <th key={`${colHead}-${idx}`} id={`${colHead}-${idx}`}>
                {colHead.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses
            .sort((a, b) => a.id - b.id)
            .map((expense, idx) => (
              <tr key={`${idx}-${expense.id}`}>
                {headers.map((colKey, colDx) => (
                  <td
                    key={`${idx}-${expense.id}-${colDx}-${colKey}`}
                    id={`${idx}-${expense.id}-${colDx}-${colKey}`}
                  >
                    {expense[`${colKey}`]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
    </TableBox>
  );
};
