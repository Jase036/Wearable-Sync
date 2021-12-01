"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// using uuid to create unique id for our customers
const { v4: uuidv4 } = require("uuid");

//Declare our MongoDB client and options along with the database name so we don't have to repeat in all handler functions.
const client = new MongoClient(MONGO_URI, options);
const db = client.db("Ecommerce");

const getAllCompanies = async (req, res) => {

  //To paginate from server we use skip & limit as query parameters. In case they aren't sent, we default to skip 0 and limit 20.
  let { skip, limit } = req.query;
  skip ? (skip = Number(skip)) : (skip = 0);
  limit ? (limit = Number(limit)) : (limit = 20);

  try {
    await client.connect();
    const companiesList = await db
      .collection("companies")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

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
  let { skip, limit } = req.query;
  skip ? (skip = Number(skip)) : (skip = 0);
  limit ? (limit = Number(limit)) : (limit = 20);

  try {
    await client.connect();

    const productsList = await db
      .collection("items")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

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

const addNewPurchase = async (req, res) => {
  
  const { firstName, lastName, address, phoneNumber, email} =
    req.body;
  
    const newPurchase = req.body.purchaseInfo
    
  try {
    await client.connect();
    console.log("connected");

    const customersList = await db.collection("customers").find().toArray();

    const purchaseId = uuidv4();
    const purchases = newPurchase.map((purchase) => {
      return { ...purchase, purchaseId, date: new Date() };
    });

    if (customersList.filter((e) => e.email === email).length > 0) {
      //   const updateStock = await db.collection("items").updateOne(
      //     { _id: Number(newPurchase._id) },
      //     {
      //       $inc: {
      //         numInStock: -newPurchase.quantity,
      //       },
      //     }
      //   );
      //   console.log(updateStock);

      const updatePurchaseInfo = await db.collection("customers").updateOne(
        { email: email },
        {
          $push: {
            purchaseInfo: { $each: purchases },
          },
        }
      );
      
        
      res.status(200).json({ status: 200, data: updatePurchaseInfo});

      console.log(updatePurchaseInfo);
      res.status(200).json({ status: 200, data: updatePurchaseInfo });
    } else {
      
      //if it's a new user we simple create the new document in Mongo
      const _id = uuidv4();
      const newEntry = await db.collection("customers").insertOne({
        _id: _id,
        ...req.body,
        purchaseInfo: [{ ...purchases }],
      });

      res.status(200).json({ status: 200, data: newEntry });
    }
    newPurchase.map(async (purchase) => {
      const updateStock = await db.collection("items").updateOne(
        { _id: Number(purchase._id) },
        {
          $inc: {
            numInStock: -purchase.quantity,
          },
        }
      );
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, error: err.message });
  }
};

module.exports = {
  getAllCompanies,
  getAllProducts,
  getCompanyById,
  getProductById,
  getProductsByCategory,
  addNewPurchase,
};
