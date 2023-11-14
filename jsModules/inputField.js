import { makeElements } from "./makeElementsFunction.js";

const inputMaker = () => {
  const input = makeElements("input", {
    type: "number",
    className: "numberField",
    readOnly: "true",
  });
  return input;
};

export { inputMaker };
