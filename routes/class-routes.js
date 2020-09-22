const express = require("express");
const router = express.Router();

const classController = require("../controllers/class-controllers");

const requireAuth = (req, res, next) => {
   const { user } = req.session;
   if (!user) {
      return res.status(401).send("Unauthorized: Not signed in");
   }
   next();
};

router.get("/:id", requireAuth, classController.getById);
router.post("/", requireAuth, classController.create);
router.put("/:id", requireAuth, classController.update);
router.delete("/:id", requireAuth, classController.destroy);
if (process.env.NODE_ENV === "development") {
   router.post("/seed", classController.seedDB);
}

module.exports = router;
