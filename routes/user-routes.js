const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controllers");

router.post("/", userController.create);
router.post("/login", userController.login);
router.put("/", userController.update);
router.delete("/:id", userController.destroy);
//seed route should only exist for dev env
if (process.env.NODE_ENV === "development") {
   router.post("/seed", userController.seedDB);
   router.get("/", userController.index);
   router.get("/:id", userController.getById);
}

module.exports = router;
