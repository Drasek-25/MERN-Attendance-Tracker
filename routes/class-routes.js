const express = require("express");
const router = express.Router();

const classController = require("../controllers/class-controllers");
//verify a login session has occured before allowing
//any calls to the class data routes
const requireAuth = (req, res, next) => {
   const { user } = req.session;
   if (!user) {
      return res.status(401).send("Unauthorized: Not signed in");
   }
   next();
};

router.get("/", requireAuth, classController.getById);
router.post("/", requireAuth, classController.create);
router.put("/:id", requireAuth, classController.update);
router.delete("/:id", requireAuth, classController.destroy);
//seed route should only exist for dev env
if (process.env.NODE_ENV === "development") {
   router.post("/seed", classController.seedDB);
}

module.exports = router;
