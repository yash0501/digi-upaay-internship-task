const mongoose = require("mongoose");
const Meals = require("../models/index");

const controller = {
  async home(req, res, next) {
    console.log(req.body);
    console.log("Hello World");
    res.send("Hello World");
  },

  async create(req, res, next) {
    //console.log(req.body);
    let mealType = req.body.mealType;
    let foods = req.body.foods;

    // enum: ["BREAKFAST", "LUNCH", "DINNER"]

    const meals = new Meals({
      mealType,
      foods,
    });

    try {
      const result = await meals.save();
      console.log(`Meal created successfully ${result}`);
      res.json({
        status: 200,
        message: "Meal created successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
      res.json({
        status: false,
        message: "Meal creation failed",
        data: err,
      });
    }
  },

  async getAll(req, res, next) {
    try {
      const allMeals = await Meals.find();
      if (!allMeals) {
        console.log("No meals found");
      }
      res.json({
        status: 200,
        message: "All Meals",
        data: allMeals,
      });
    } catch (err) {
      res.json({
        status: false,
        message: "Failed to get all meals",
        data: err,
      });
    }
  },

  async getMealType(req, res, next) {
    const mealType = req.params.mealType;
    try {
      const selectedMeals = await Meals.find({ mealType: mealType });
      if (!selectedMeals) {
        console.log("No selected meals found");
      }
      res.json({
        status: 200,
        message: "Selected Meals",
        data: selectedMeals,
      });
    } catch (err) {
      res.json({
        status: false,
        message: "Failed to get selected meals",
        data: err,
      });
    }
  },
};

module.exports = controller;
