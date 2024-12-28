export const sort = (property, order, records) => {
  const asc = (object1, object2) => object1[property] - object2[property];
  const dsc = (object1, object2) => object2[property] - object1[property];

  return records.toSorted(order === 1 ? dsc : asc);
};

export const search = (property, value, records) => [
  records.find((data) => data[property] === value),
];

export const topRatedProducts = (minRating, records) =>
  records.filter(({ rating }) => rating >= minRating);
