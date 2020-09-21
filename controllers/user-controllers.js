const User = require("../models/users");
const { users } = require("./../data/users");
const bcrypt = require("bcrypt");

//router.post("/seed", userController.seedDB);
const seedDB = (req, res) => {
   User.create(users)
      .then((users) => res.status(200).json({ users }))
      .catch((err) => res.status(500).json({ Error: err.message }));
};
//router.get("/", userController.index);
const index = (req, res) => {
   User.find().exec((err, docs) => {
      if (err) {
         res.status(500).json({
            message: `There was an error with our database: ${err}`,
         });
      } else if (docs.length === 0) {
         res.status(404).json({ message: "There were no users found" });
      } else {
         res.status(200).json(docs);
      }
   });
};
// router.get("/:id", userController.getById);
const getById = (req, res) => {
   User.findById(req.params.id).exec((err, user) => {
      if (!user) {
         res.status(404).json({
            message: "Could not find a user with that id.",
         });
      } else if (err) {
         res.status(500).json({
            message: `There was an error with our databse: ${err}`,
         });
      } else {
         res.status(200).json(user);
      }
   });
};
//router.post("/", userController.create);
const create = async (req, res) => {
   try {
      const hashed = await bcrypt.hash(req.body.password, 10);
      console.log(hashed);
      const user = {
         name: req.body.name,
         email: req.body.email,
         password: hashed,
      };
      User.create(user)
         .then((user) => res.status(200).json(user))
         .catch((err) => res.status(500).json({ Error: err.message }));
   } catch {
      res.status(500).send();
   }
};

//router.put("/:id", userController.update);
const update = (req, res) => {
   User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, user) => {
         if (err) {
            res.status(404).json({
               message: "Could not find a user with that id.",
            });
         } else {
            res.json(user);
         }
      }
   );
};
//router.delete("/:id", userController.destroy);
const destroy = (req, res) => {
   User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) {
         res.status(404).json({
            message: "Could not find a user with that id.",
         });
      } else {
         res.status(200).json(user);
      }
   });
};

module.exports = { index, getById, create, update, destroy, seedDB };
