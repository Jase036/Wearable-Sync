"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getAllCompanies,
  getAllProducts,
  getCompanyById,
  getProductById,
  getProductsByCategory,
  addNewCustomer,
} = require("./handlers");
const PORT = 4000;
const app = express();
// express()

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));


// api to get all the companies
app.get("/api/all-companies", getAllCompanies);

// api to get all the products
app.get("/api/all-products", getAllProducts);

//api to get a company by _id
app.get("/api/company/:_id", getCompanyById);

//api to get a product by _id
app.get("/api/product/:_id", getProductById);

//api to get all products by category
app.get("/api/products-by-category/:category", getProductsByCategory);

app.post("/api/add-new-purchase", addNewPurchase);

//api to get all products in a price category- stretch goal for later


app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
