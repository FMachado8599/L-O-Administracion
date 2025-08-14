import { companyData } from "../data/companyData";

export function replaceVars(obj) {
  if (typeof obj === "string") {
    return obj.replace(/\{\{(.*?)\}\}/g, (_, key) => companyData[key.trim()] || "");
  }
  if (Array.isArray(obj)) {
    return obj.map(replaceVars);
  }
  if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, replaceVars(v)]));
  }
  return obj;
}
