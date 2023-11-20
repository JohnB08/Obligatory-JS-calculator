//Importer moduler jeg trenger som er lagret i jsModules.
import { makeElements } from "./jsModules/makeElementsFunction.js";
import { numberBtnMaker } from "./jsModules/NumberButtons.js";
import {
  operatorBtnMaker,
  operatorObject,
} from "./jsModules/OperatorButtons.js";
import { inputMaker } from "./jsModules/inputField.js";
import { calculatorFunctionObject } from "./jsModules/equalAndClearButton.js";
//lager containere jeg trenger
const btnContainer = makeElements("div", { className: "btnContainer" });
const numberBtnContainer = makeElements("div", {
  className: "numberBtnContainer",
});
const inputContainer = makeElements("div", { className: "inputContainer" });
const mainInput = inputMaker();
inputContainer.appendChild(mainInput);
document.body.appendChild(inputContainer);
btnContainer.appendChild(numberBtnContainer);

//Lager knappene
const buttonArray = numberBtnMaker();
buttonArray.forEach((button) => {
  button.addEventListener("click", () => {
    mainInput.value += button.value;
  });
  numberBtnContainer.appendChild(button);
});
const operatorBtnContainer = makeElements("div", {
  className: "operatorBtnContainer",
});
btnContainer.appendChild(operatorBtnContainer);
const operatorBtnArray = operatorBtnMaker(operatorObject);
operatorBtnArray.forEach((button) => {
  button.addEventListener("click", () => {
    calculatorFunctionObject.equal.currentNum1 = mainInput.value;
    calculatorFunctionObject.equal.currentOperator = button.id;
    mainInput.value = "";
  });
  operatorBtnContainer.appendChild(button);
});
const equalAndClearButtonsArray = operatorBtnMaker(calculatorFunctionObject);
equalAndClearButtonsArray.forEach((button) => {
  operatorBtnContainer.appendChild(button);
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      calculatorFunctionObject.equal.currentNum2 = mainInput.value;
      mainInput.value = operatorObject[
        calculatorFunctionObject.equal.currentOperator
      ].operation(
        //må bruke parseInt her, fordi mainInput.value er en string.
        parseInt(calculatorFunctionObject.equal.currentNum1),
        parseInt(calculatorFunctionObject.equal.currentNum2)
      );
    } else {
      calculatorFunctionObject.clear.clearFunction();
      mainInput.value = "";
    }
  });
});
document.body.appendChild(btnContainer);
