import Dexie from "dexie";
import { getFy } from "../utils/helper";
const db = new Dexie("Expenses");
const schema = {};

// const cYear = () => new Date().getFullYear();
// const nYear = () => (cYear() + 1) % 100;
const fy = getFy();
schema[`Expense${fy}`] = "++id, subject, paidon, amount";

db.version(1).stores(schema);

export { db };
