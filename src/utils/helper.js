/**
 * Returns a string representation of current Financial Year,
 * like 2024-25.
 *
 * Not accurate as the Financial Year starts from April.
 *
 * @param {string|null} date - Optional, extracts the FY depending on month and year.
 * @returns {string} Current F.Y
 */
const getFy = (date = null) => {
  if (!date) {
    const cYear = () => new Date().getFullYear();
    const nYear = () => (cYear() + 1) % 100;
    return `${cYear()}-${nYear()}`;
  }
  if (isNaN(new Date(date))) throw new Error("Incorrect date.");
  const dateProvided = new Date(date);
  const cYear = dateProvided.getFullYear();
  const nYear = dateProvided.getFullYear() + 1;
  const isBeforeApril = dateProvided.getMonth() < 3;

  const startYear = isBeforeApril ? cYear - 1 : cYear;
  const nextYear = isBeforeApril ? cYear : nYear;

  return `${startYear}-${nextYear % 100}`;
};

/**
 * @typedef {object} OpStatus
 * @property {string} pending
 * @property {string} success
 * @property {string} error
 * 
 * 
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
    : op === "fetch"
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
/**
 *
 * @param {string} month 3 Lettered Months - jan, feb ...
 * @returns {boolean} validates the month parameter.
 */
const validMonths = (month) =>
  month.length !== 3 ? false : !isNaN(new Date(`2024 ${month} 01`));

/**
 *
 * @param {string} date A string representation of date in "YYYY-MM-DD" format.
 * @returns {string} Short Month of that date.
 * @throws {Error} If invalid date is provided.
 */
const getMonth = (date) => {
  if (isNaN(new Date(date))) throw new Error("Invalid date provided.");
  const providedDate = new Date(date);
  const month = providedDate.toLocaleString("default", { month: "short" });
  return month;
};

export { getFy, notifyOps, validMonths, getMonth };
