/**
 * funksjon for å lage html elementer basert på type, og et object med key/value par
 * @param {*} type type HTML element
 * @param {*} properties attributter og properties til HTML elementet som object.
 * @returns HTML elementet.
 */
function makeElements(type, properties) {
  const propertyArray = Object.entries(properties);
  const element = document.createElement(type);
  propertyArray.forEach((property) => {
    const [propertyName, propertyValue] = property;
    element[propertyName] = propertyValue;
  });
  return element;
}

//i bunn eksporterer funksjonen ut av dokumentet.
export { makeElements };
