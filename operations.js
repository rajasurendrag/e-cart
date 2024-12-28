export const sort = (key, order, products) => {
  const asc = (object1, object2) => object1[key] - object2[key];
  const dsc = (object1, object2) => object2[key] - object1[key];

  return records.toSorted(order === 1 ? dsc : asc);
};

export const search = (property, value, records) => [
  records.find((data) => data[property] === value),
];

export const topRatedProducts = (minRating, records) =>
  records.filter(({ rating }) => rating >= minRating);
