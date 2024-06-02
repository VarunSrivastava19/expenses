import { toast } from "react-toastify";
import { db } from "../db";

export const useDexie = () => {
  /**
   * @typedef {Object} Expense
   * @property {string} subject
   * @property {Date} paidon
   * @property {number} amount
   *
   * @param {string} fy Financial Year, provided as YYYY-NY, as 2024-25.
   * @param {Expense} data The data Object containing subject, paidon, amount keys.
   * @throws {Error} Throws an error if save operation fails.
   * @returns {import("dexie").IndexableType|number} id The ID of saved expense.
   */
  const saveExpense = async (fy, data) => {
    try {
      const id = await db.table(`Expense${fy}`).add({ ...data });
      toast(`Data added to Expense${fy} with id ${id}`);
      return id;
    } catch (error) {
      console.log("[hooks/useDexie - saveExpense] Error -", error);
      toast("Error saving data");
      throw error;
    }
  };
  const fetchExpenses = async (fy, { startDate, endDate, subject }) => {
    try {
      const expenses = await db.table(`Expense${fy}`).toArray();
      return expenses;
    } catch (error) {
      console.log("[hooks/useDexie - fetchExpenses] Error -", error);
      toast("Error fetching data");
      throw error;
    }
  };

  return {
    saveExpense,
    fetchExpenses,
  };
};
