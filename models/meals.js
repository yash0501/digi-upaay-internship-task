const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  mealType: { type: String },
  foods: [
    {
      food: [],
    },
  ],
});

module.exports = mongoose.model("Meals", mealSchema);
