const express = require("express");
const router = express.Router();
const {
  addData,
  delData,
  updateData,
} = require("../controllers/curdcontrollers");

router.route("/").get(addData);
router.route("/del").get(delData);
router.route("/update").get(updateData);

module.exports = router;
