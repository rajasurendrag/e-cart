const resultMessage = (actual, expected, func) => {
  return func(actual, expected) ? "✔" : "✘";
};

const isEqual = (lhs, rhs) => lhs === rhs;

const areObjectsEqual = (x, y) =>
  areEqual(Object.entries(x).sort(), Object.entries(y).sort());

const areEqual = (lhs, rhs) => {
  const islhsAnArray = Array.isArray(lhs);
  const islhsAnObject = !islhsAnArray && typeof lhs === "object";

  if (islhsAnObject) return areObjectsEqual(lhs, rhs);
  if (!islhsAnArray) return isEqual(lhs, rhs);
  if (lhs.length !== rhs.length) return false;

  return lhs.every((element, index) => areEqual(element, rhs[index]));
};

const display = (result, func) => {
  console.log("testing :", func);
  console.table(result);
  console.log();
};

export const testFunc = (func, tests) => {
  const result = tests.map(({ description, expected, args }) => {
    const status = resultMessage(func(...args), expected, areEqual);
    return { status, description };
  });

  return display(result, func);
};
