import { makeElements } from "./makeElementsFunction.js";

/**
 * lager Input med makeElements som jeg trenger i kalkulatoren. Input er ReadOnly
 */
const inputMaker = () => {
  const input = makeElements("input", {
    type: "number",
    className: "numberField",
    readOnly: "true",
  });
  return input;
};

export { inputMaker };
