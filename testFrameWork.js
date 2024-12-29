const resultMessage = (actual, expected, func) => {
  return func(actual, expected) ? "✔ passed" : "✘ failed";
};

const isEqual = (lhs, rhs) => lhs === rhs;

const areObjectsEqual = (object1, object2) =>
  areEqual(Object.entries(object1).sort(), Object.entries(object2).sort());

const areEqual = (entity1, entity2) => {
  const isEntity1AnArray = Array.isArray(entity1);
  const isEntity1AnObject = !isEntity1AnArray && typeof entity1 === "object";

  if (isEntity1AnObject) return areObjectsEqual(entity1, entity2);
  if (!isEntity1AnArray) return isEqual(entity1, entity2);
  if (entity1.length !== entity2.length) return false;

  return entity1.every((element, index) => areEqual(element, entity2[index]));
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
