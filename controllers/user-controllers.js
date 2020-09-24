const User = require("../models/users");
const { users } = require("./../data/users");
const bcrypt = require("bcrypt");

//DEV ONLY: router.post("/seed", userController.seedDB);
const seedDB = (req, res) => {
   User.create(users)
      .then((users) => res.status(200).json({ users }))
      .catch((err) => res.status(500).json({ Error: err.message }));
};

//DEV ONLY router.get("/", userController.index);
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

//DEV ONLY: router.get("/:id", userController.getById);
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

//router.post("/login", userController.login);
const login = async (req, res) => {
   const curUser = await User.findOne({ email: req.body.email });
   try {
      // if password checks out then user session is created
      if (await bcrypt.compare(req.body.password, curUser.password)) {
         delete curUser.password
         req.session.user = curUser;
         res.status(200).json(curUser);
      } else {
         res.send("Incorrect Password");
      }
   } catch {
      res.status(500).send();
   }
};

//router.put("/:id", userController.update);
const update = (req, res) => {
   const curUser = await User.findOne({ email: req.body.email });
   try {
      // if password checks out then allow user update
      if (await bcrypt.compare(req.body.password, curUser.password)) {

         let choice = {}
         switch (req.body.choice) {
            case "password":
               const hashed = await bcrypt.hash(req.body.newPassword, 10);
               choice = { password: hashed }
               break
            case "name":
               choice = { name: req.body.newName }
               break
            case "email":
               choice = { email: req.body.newEmail }
               break
            default:
               res.status(400).json({
                  message: "Invalid change choice",
               });
         }

         User.findByIdAndUpdate(
            { _id: curUser.id },
            choice,
            { new: true },
            (err, user) => {
               if (err) {
                  res.status(404).json({
                     message: "Could not find a user with that id.",
                  });
               } else {
                  delete user.password
                  res.json(user);
               }
            }
         );
      } else {
         res.stats(401).send("Incorrect Password");
      }
   } catch {
      res.status(500).send();
   }
}

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

module.exports = { index, getById, create, update, destroy, seedDB, login };
