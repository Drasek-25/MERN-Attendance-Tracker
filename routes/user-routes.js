const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controllers");

router.get("/", userController.index);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.post("/login", userController.login);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);
//seed route should only exist for dev env
if (process.env.NODE_ENV === "development") {
   router.post("/seed", userController.seedDB);
}

module.exports = router;
