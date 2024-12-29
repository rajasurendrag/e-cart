import { sort, search, trim, topRatedProducts } from "./operations.js";
import { testFunc } from "./testFrameWork.js";
import { products } from "./products.js";

testFunc(topRatedProducts, [
  {
    description: "products rated more than 4.8",
    args: [4.8, products],
    expected: [
      {
        productID: 6,
        name: "gaming chair",
        price: 189.99,
        stock: 30,
        category: "furniture",
        rating: 4.8,
      },
    ],
  },
  {
    description: "products rated more than 4.7",
    args: [4.7, products],
    expected: [
      {
        productID: 3,
        name: "wireless headphones",
        price: 129.99,
        stock: 200,
        category: "electronics",
        rating: 4.7,
      },
      {
        productID: 6,
        name: "gaming chair",
        price: 189.99,
        stock: 30,
        category: "furniture",
        rating: 4.8,
      },
      {
        productID: 15,
        name: "jacket",
        price: 89.99,
        stock: 75,
        category: "clothing",
        rating: 4.7,
      },
    ],
  },
]);

testFunc(sort, [
  {
    description: "sorting products based on price",
    args: ["stock", 1, products],
    expected: [],
  },
]);
