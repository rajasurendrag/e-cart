import { products } from "./products.js";
import {
  sort,
  search,
  topRatedProducts,
  trim,
  listOfProducts,
  absType,
} from "./operations.js";

const eCart = () => {
  const query = prompt("e-cart:");
  const [command, property, valueString] = trim(query);
  const value = absType(valueString);

  switch (command) {
    case "search":
      return search(property, value, products);
    case "sort":
      return sort(property, Number(value), products);
    case "minRating":
      return topRatedProducts(value, products);
    case "list":
      return listOfProducts(property, "category", products);
    default:
      return "InValid category";
  }
};

const main = () => {
  while (confirm("do you want to perform more operations ?")) {
    const result = eCart();

    console.log(result.at(0) === undefined ? "inValid category" : result);
  }
};

main();
