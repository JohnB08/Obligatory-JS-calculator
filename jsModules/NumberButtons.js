import { makeElements } from "./makeElementsFunction.js";
const numberBtnMaker = () => {
  let buttonArray = [];
  for (let i = 0; i < 10; i++) {
    let numberBtn = makeElements("button", {
      className: `numberBtn`,
      textContent: i,
      value: i,
      style: `grid-area: btn${i};`,
    });
    buttonArray.push(numberBtn);
  }
  return buttonArray;
};
export { numberBtnMaker };
