export const sort = (key, order, records) => {
  const asc = (object1, object2) => object1[key] - object2[key];
  const dsc = (object1, object2) => object2[key] - object1[key];

  return records.toSorted(order === 1 ? dsc : asc);
};

export const listOfProducts = (property, field, records) =>
  records
    .filter((record) => record[field] === property)
    .map(({ name }) => name);

export const absType = (value) =>
  isNaN(Number(value)) ? value : Number(value);

export const search = (property, value, records) => [
  records.find((data) => data[property] === value),
];

export const trim = (string) =>
  string.split(" ").filter((element) => element !== "");

export const topRatedProducts = (minRating, records) =>
  records.filter(({ rating }) => rating >= minRating);
