const express = require("express");
require("dotenv").config();
const { CofferModel } = require("../Models/Coffer.Model");

const CofferRouter = express.Router();

CofferRouter.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query.end_year) {
      query.end_year = req.query.end_year;
    }
    if (req.query.topic) {
      query.topic = req.query.topic;
    }
    if (req.query.sector) {
      query.sector = req.query.sector;
    }
    if (req.query.region) {
      query.region = req.query.region;
    }
    if (req.query.pestle) {
      query.pestle = req.query.pestle;
    }
    if (req.query.source) {
      query.source = req.query.source;
    }
    if (req.query.country) {
      query.country = req.query.country;
    }

    const coffer = await CofferModel.find(query);
    res.status(200).send({ message: "Filtered Coffer", coffer });
    console.log("res", coffer);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API request",
      error: err,
    });
  }
});

CofferRouter.post("/add", async (req, res) => {
  try {
    const coffer = await CofferModel.insertMany(req.body);
    res.status(200).send({ message: "Category Successfully added", coffer });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding coffer",
      error: err,
    });
  }
});

module.exports = { CofferRouter };
