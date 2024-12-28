export const sort = (key, order, records) => {
  const asc = (object1, object2) => object1[key] - object2[key];
  const dsc = (object1, object2) => object2[key] - object1[key];

  return records.toSorted(order === 1 ? dsc : asc);
};

export const search = (key, value, records) => {
  return [records.find((data) => data[key] === value)];
};
