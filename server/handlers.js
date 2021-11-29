"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options);
const db = client.db("Ecommerce");
// function to get all companies from mongodb collection companies
const getAllCompanies = async (req, res) => {
  try {
    await client.connect();
    const companiesList = await db.collection("companies").find().toArray();
    // console.log(companiesList);
    res.status(200).json({ status: 200, data: companiesList });
  } catch (err) {
    res.status(404).json({ status: 404, err: err.stack });
  } finally {
    client.close();
  }
};
const getAllProducts = async (req, res) => {
  try {
    await client.connect();
    const productsList = await db.collection("items").find().toArray();
    // console.log(productsList);
    res.status(200).json({ status: 200, data: productsList });
  } catch (err) {
    res.status(404).json({ status: 404, error: err.stack });
  } finally {
    client.close();
  }
};
const getCompanyById = async (req, res) => {
  const { _id } = req.params;
  try {
    await client.connect();
    const companyById = await db
      .collection("companies")
      .find({ _id })
      .toArray();
    console.log(companyById);
    if (companyById) {
      res.status(200).json({ status: 200, data: companyById });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "The company Id is not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, error: err.stack });
  } finally {
    client.close();
  }
};
const getProductById = async (req, res) => {
  const { _id } = req.params;
  try {
    await client.connect();
    const productById = await db.collection("items").findOne({ _id });
    console.log(productById);
    if (productById) {
      res.status(200).json({ status: 200, data: productById });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "The product Id is not found" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.stack });
  } finally {
    client.close();
  }
};
module.exports = {
  getAllCompanies,
  getAllProducts,
  getCompanyById,
  getProductById,
};
