const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

const userController = require("../controllers/user-controllers");

//this is to verify the password of currently signed in users
const passwordVerify = async (req, res, next) => {
   console.log("test", req.session.user);
   await User.findById(req.session.user._id).exec((err, user) => {
      if (!user) {
         res.status(404).json({
            message: "Could not find a user with that id.",
         });
      } else if (err) {
         res.status(500).json({
            message: `There was an error with our databse: ${err}`,
         });
      } else {
         if (bcrypt.compare(req.body.password, user.password)) {
            next();
            return;
         } else {
            res.stats(401).send("Incorrect Password");
         }
      }
   });
};

router.post("/", userController.create);
router.post("/login", userController.login);
router.put("/", passwordVerify, userController.update);
router.delete("/:id", passwordVerify, userController.destroy);
//seed route should only exist for dev env
if (process.env.NODE_ENV === "development") {
   router.post("/seed", userController.seedDB);
   router.get("/", userController.index);
   router.get("/:id", userController.getById);
}

module.exports = router;
