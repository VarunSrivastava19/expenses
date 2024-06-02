/**
 * Returns a string representation of current Financial Year,
 * like 2024-25.
 *
 * Not accurate as the Financial Year starts from April.
 * @returns {string} Current F.Y
 */
const getFy = () => {
  const cYear = () => new Date().getFullYear();
  const nYear = () => (cYear() + 1) % 100;
  return `${cYear()}-${nYear()}`;
};

/**
 * @typedef {object} OpStatus
 * @param {string} pending
 * @param {string} success
 * @param {string} error 
 * @param {("save"|"fetch")} op 
 * @returns {OpStatus} Status of promise
 */
const notifyOps = (op) =>
  op === "save"
    ? {
        pending: "Saving expense 🤔",
        success: "Expense saved ✅",
        error: "Failed to save expense ❌",
      }
    : op === "fetchAll"
    ? {
        pending: "Fetching expenses 🤔",
        success: "Expenses fetched ✅",
        error: "Failed to fetch expenses ❌",
      }
    : {
        pending: "Saving expense",
        success: "Promise resolved 👌",
        error: "Promise rejected 🤯",
      };

export { getFy, notifyOps };
