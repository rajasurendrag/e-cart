const resultMessage = (actual, expected, func) => {
  return func(actual, expected) ? "✔ passed" : "✘ failed";
};

const display = (result, func) => {
  console.log("testing :", func);
  console.table(result);
  console.log();
};

const areObjectsEqual = (obj1, obj2) => {
  if (typeof obj1 !== "object") return obj1 === obj2;

  const keysOfObj1 = Object.keys(obj1);
  const keysOfObj2 = Object.keys(obj2);

  if (keysOfObj1.length !== keysOfObj2.length) return false;

  return keysOfObj1.every(
    (key) => key in obj2 && areObjectsEqual(obj1[key], obj2[key])
  );
};

export const testFunc = (func, tests) => {
  const result = tests.map(({ description, expected, args }) => {
    const status = resultMessage(func(...args), expected, areEqual);
    return { status, description };
  });

  return display(result, func);
};
