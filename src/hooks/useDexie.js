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
      // toast(`Data added to Expense${fy} with id ${id}`);
      return id;
    } catch (error) {
      console.log("[hooks/useDexie - saveExpense] Error -", error);
      // toast("Error saving data");
      throw error;
    }
  };
  const fetchExpenses = async (fy, { startDate, endDate, subject }) => {
    // console.log({ startDate, endDate, subject, fy });
    if (!startDate && isNaN(startDate))
      throw new Error("Invalid date provided.");
    try {
      let query = db.table(`Expense${fy}`);
      if (subject) query = query.where("subject").equals(subject);
      if (endDate)
        query = query
          .where("paidOn")
          .aboveOrEqual(startDate)
          .belowOrEqual(endDate);

      // const expenses = await db.table(`Expense${fy}`).toArray();
      const expenses = await query.toArray();
      return expenses;
    } catch (error) {
      console.log("[hooks/useDexie - fetchExpenses] Error -", error);
      throw error;
    }
  };

  return {
    saveExpense,
    fetchExpenses,
  };
};
