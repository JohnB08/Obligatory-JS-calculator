import { makeElements } from "./makeElementsFunction.js";

const operatorObject = {
  multiply: {
    buttonText: "x",
    operation: function (num1, num2) {
      return num1 * num2;
    },
  },
  addition: {
    buttonText: "+",
    operation: function (num1, num2) {
      return num1 + num2;
    },
  },
  divide: {
    buttonText: "/",
    operation: function (num1, num2) {
      return num1 / num2;
    },
  },
  subtract: {
    buttonText: "-",
    operation: function (num1, num2) {
      return num1 - num2;
    },
  },
};
const operatorBtnMaker = (operatorObject) => {
  const operatorBtnArray = [];
  Object.keys(operatorObject).forEach((object) => {
    const operatorBtn = makeElements("button", {
      className: operatorObject[object].buttonText,
      textContent: operatorObject[object].buttonText,
      style: `grid-area: ${object};`,
      id: object,
    });
    operatorBtnArray.push(operatorBtn);
  });
  return operatorBtnArray;
};

export { operatorObject, operatorBtnMaker };
