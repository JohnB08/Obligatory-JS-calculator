const calculatorFunctionObject = {
  equal: {
    buttonText: "=",
    currentNum1: 0,
    currentNum2: 0,
    currentOperator: null,
  },
  clear: {
    buttonText: "c",
    clearFunction: function () {
      calculatorFunctionObject.equal.currentNum1 = 0;
      calculatorFunctionObject.equal.currentNum2 = 0;
      calculatorFunctionObject.equal.currentOperator = null;
    },
  },
};

export { calculatorFunctionObject };
