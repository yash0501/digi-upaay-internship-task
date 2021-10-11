const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.home);
router.post("/create", controller.create);
router.get("/getAll", controller.getAll);
router.get("/:mealType", controller.getMealType);

module.exports = router;
