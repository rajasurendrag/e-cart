import { sort, search, trim, topRatedProducts, absType } from "./operations.js";
import { testFunc } from "./testFrameWork.js";
import { products } from "./products.js";
import { fruits } from "./testData.js";

testFunc(topRatedProducts, [
  {
    description: "products rated more than 5",
    args: [5, products],
    expected: [],
  },
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

testFunc(search, [
  {
    description: "searching for electronics laptop",
    args: ["name", "laptop", products],
    expected: [
      {
        productID: 1,
        name: "laptop",
        price: 899.99,
        stock: 50,
        category: "electronics",
        rating: 4.5,
      },
    ],
  },
  {
    description: "searching for electronics computer",
    args: ["name", "computer", products],
    expected: [undefined],
  },
  {
    description: "searching for electronics footwear",
    args: ["category", "footwear", products],
    expected: [
      {
        productID: 13,
        name: "sneakers",
        price: 79.99,
        stock: 150,
        category: "footwear",
        rating: 4.6,
      },
    ],
  },
]);

testFunc(sort, [
  {
    description: "sort fruits on price",
    args: ["price", 1, []],
    expected: [],
  },
  {
    description: "sort fruits on price",
    args: ["price", 1, fruits],
    expected: [
      {
        productID: 1,
        name: "Apple",
        price: 1.2,
        stock: 150,
        rating: 4.7,
      },
      {
        productID: 3,
        name: "Orange",
        price: 1.0,
        stock: 200,
        rating: 4.6,
      },
      {
        productID: 2,
        name: "Banana",
        price: 0.5,
        stock: 100,
        rating: 4.5,
      },
    ],
  },
]);

testFunc(absType, [
  {
    description: "converting number string to number",
    args: "0",
    expected: 0,
  },
  {
    description: "converting number string to number",
    args: "2",
    expected: 2,
  },
]);
