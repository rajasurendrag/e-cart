import { products } from "./products.js";
import { sort, search, topRatedProducts } from "./operations.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, property, value] = query.split(" ");

  switch (command) {
    case "search":
      return search(property, value, products);
    case "sort":
      return sort(property, Number(value), products);
    case "minRating":
      return topRatedProducts(value, products);
  }
};

console.table(main());
