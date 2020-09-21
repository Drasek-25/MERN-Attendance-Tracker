const express = require("express");
const router = express.Router();

const classController = require("../controllers/class-controllers");

router.get("/", classController.getById);
router.post("/", classController.create);
router.put("/", classController.update);
router.delete("/", classController.destroy);
router.post("/seed", classController.seedDB);

module.exports = router;
