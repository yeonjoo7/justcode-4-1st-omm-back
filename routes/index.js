const express = require("express");
const router = express.Router();

const CategoryRoute = require("./CategoryRoute");
const MasterRoute = require("./MasterRoute");

router.get("/", (req, res) =>
  res.status(200).json({ message: "Hello! You are connected." })
);

router.use("/category", CategoryRoute);
router.use("/pro", MasterRoute);

module.exports = router;
