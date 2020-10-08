const User = require("../models/users");
const { users } = require("./../data/users");
const bcrypt = require("bcrypt");

//SEED USERS
//DEV ONLY: router.post("/seed", userController.seedDB);
const seedDB = (req, res) => {
   User.create(users)
      .then((users) => res.status(200).json({ users }))
      .catch((err) => res.status(500).json({ Error: err.message }));
};

// RETURN ALL USERS
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
         res.status(200).json(
            docs.map((doc) => {
               let newDoc = { ...doc._doc };
               delete newDoc.password;
               return newDoc;
            })
         );
      }
   });
};

// RETURN USER BY ID
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

// CREATE USER
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

// LOGIN
//router.post("/login", userController.login);
const login = async (req, res) => {
   await User.findOne({ email: req.body.email }).exec((err, user) => {
      if (!user) {
         res.status(404).json({
            message: "Could not find a user with that email.",
         });
      } else if (err) {
         res.status(500).json({
            message: `There was an error with our databse: ${err}`,
         });
      } else {
         if (bcrypt.compare(req.body.password, user.password)) {
            let curUser = { ...user._doc };
            delete curUser.password;
            req.session.user = curUser;
            res.status(200).json(curUser);
         } else {
            res.send("Incorrect Password");
         }
      }
   });
};

//router.put("/:id", userController.update);
const update = async (req, res) => {
   let choice = {};
   switch (req.body.choice) {
      case "password":
         const hashed = await bcrypt.hash(req.body.newPassword, 10);
         choice = { password: hashed };
         break;
      case "name":
         choice = { name: req.body.newName };
         break;
      case "email":
         choice = { email: req.body.newEmail };
         break;
      default:
         res.status(400).json({
            message: "Invalid change choice",
         });
   }

   User.findByIdAndUpdate(
      req.session.user._id,
      choice,
      { new: true },
      (err, user) => {
         if (err) {
            res.status(404).json({
               message: "Could not find a user with that id.",
            });
         } else {
            delete user.password;
            res.json(user);
         }
      }
   );
};

//router.delete("/:id", userController.destroy);
const destroy = (req, res) => {
   User.findByIdAndRemove(req.session.user._id).exec((err, user) => {
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
