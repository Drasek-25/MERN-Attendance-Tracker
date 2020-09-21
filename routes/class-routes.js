const express = require("express");
const router = express.Router();

const classController = require("../controllers/class-controllers");

router.get("/:id", classController.getById);
router.post("/", classController.create);
router.put("/:id", classController.update);
router.delete("/:id", classController.destroy);
if (process.env.NODE_ENV === development) {
   router.post("/seed", classController.seedDB);
}

module.exports = router;
