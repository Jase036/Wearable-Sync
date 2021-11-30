"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Declare our MongoDB client and options along with the database name so we don't have to repeat in all handler functions.
const client = new MongoClient(MONGO_URI, options);
const db = client.db("Ecommerce");



const getAllCompanies = async (req, res) => {
  
  //To paginate from server we use skip & limit as query parameters. In case they aren't sent, we default to skip 0 and limit 20.
  let {skip, limit} = req.query
  skip? skip = Number(skip) : skip = 0;
  limit? limit = Number(limit) : limit = 20;

  try {
    await client.connect();
    const companiesList = await db.collection("companies").find().skip(skip).limit(limit).toArray();
    
    client.close();

    if (companiesList.length !== 0) {
      res.status(200).json({ status: 200, data: companiesList });
      } else {
        res.status(404).json({ status: 404, error: err.message });
      }

    } catch (err) {
      res.status(500).json({ status: 500, error: err.message });
    }
  
};


const getAllProducts = async (req, res) => {
  
  //To paginate from server we use skip & limit as query parameters. In case they aren't sent, we default to skip 0 and limit 20.
  let {skip, limit} = req.query
  skip? skip = Number(skip) : skip = 0;
  limit? limit = Number(limit) : limit = 20;

  try {
    
    await client.connect();
    
    const productsList = await db.collection("items").find().skip(skip).limit(limit).toArray();
    
    client.close();

    if (productsList.length !== 0) {
    res.status(200).json({ status: 200, data: productsList });
    } else {
      res.status(404).json({ status: 404, error: err.message });
    }

  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};


const getCompanyById = async (req, res) => {
  
  //Transform _id string to number so we can use it to search for company _id
  const _id = Number(req.params._id);
  
  try {
    await client.connect();
    const companyById = await db.collection("companies").findOne({ _id });
    
    client.close();

    if (companyById) {
      res.status(200).json({ status: 200, data: companyById });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "The company Id is not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, error: err.message });
  }
};


const getProductById = async (req, res) => {
  
  //Transform _id string to number so we can use it to search for product _id
  const _id = Number(req.params._id);

  try {
    await client.connect();
    const productById = await db.collection("items").findOne({ _id });
    client.close();

    if (productById) {
      res.status(200).json({ status: 200, data: productById });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "The product Id is not found" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};


const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  console.log(typeof category);
  try {
    await client.connect();
    const products = await db
      .collection("items")
      .find({ category: category })
      .toArray();
      
    client.close();

    if (products) {
      res.status(200).json({ status: 200, data: products });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "The product category is not found" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};


module.exports = {
  getAllCompanies,
  getAllProducts,
  getCompanyById,
  getProductById,
  getProductsByCategory,
};
