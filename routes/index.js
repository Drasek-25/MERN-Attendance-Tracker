const express = require("express");
const router = express.Router();

const index = require("./../controllers/index");

router.get("/", index.query);
router.get("/:id", index.params);
router.post("/", index.body);

module.exports = router;
