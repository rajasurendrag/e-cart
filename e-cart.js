import { products } from "./products.js";
import { sort } from "./inventory-management.js";

const main = () => {
  const query = prompt("e-cart:");
  const [command, property, value] = query.split(" ");

  switch (command) {
    case "search":
      return search(property, value, products);
    case "sort":
      return sort(property, Number(value), products);
  }
};

console.table(main());
