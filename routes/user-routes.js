const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controllers");

router.get("/", userController.index);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.post("/login", userController.login);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);
router.post("/seed", userController.seedDB);

module.exports = router;
