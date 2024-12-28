export const sort = (property, order, products) => {
  const compareByOrder = (product1, product2) =>
    product1[property] - product2[property];

  if (order === 1) {
    return products.sort((product1, product2) =>
      compareByOrder(product2, product1)
    );
  }

  return products.sort(compareByOrder);
};
