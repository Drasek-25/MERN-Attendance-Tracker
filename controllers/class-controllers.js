const Classes = require("../models/classes");
const { classesSeed } = require("./../data/classes");

// router.get("/", classController.getById);
//req.body.id
const getById = (req, res) => {
   Classes.findById(req.session.user.classes).exec((err, classes) => {
      console.log(classes.teacher, typeof req.session.user._id);
      if (!classes) {
         res.status(404).json({
            message: `Could not find a class with that id.`,
         });
      } else if (err) {
         res.status(500).json({
            message: `There was an error with our databse: ${err}`,
         });
      } else if (classes.teacher !== req.session.user._id) {
         res.status(401).send("Unauthorized: Incorrect user");
      } else {
         res.status(200).json(classes);
      }
   });
};

// router.post("/", classController.create);
const create = (req, res) => {
   let temp = { ...req.body };
   Classes.create(temp)
      .then((classes) => res.status(200).json(classes))
      .catch((err) => res.status(500).json({ Error: err.message }));
};

// router.put("/:id", classController.update);
const update = (req, res) => {
   Classes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, classes) => {
         if (err) {
            res.status(404).json({
               message: "Could not find a class with that id.",
            });
         } else {
            res.json(classes);
         }
      }
   );
};

// router.delete("/:id", classController.destroy);
const destroy = (req, res) => {
   Classes.findByIdAndRemove(req.params.id, function (err, classes) {
      if (err) {
         res.status(404).json({
            message: "Could not find a class with that id.",
         });
      } else {
         res.status(200).json(classes);
      }
   });
};

// router.post("/seed", classController.seedDB);
const seedDB = (req, res) => {
   Classes.create(classesSeed)
      .then((classes) => res.status(200).json({ classes }))
      .catch((err) => res.status(500).json({ Error: err.message }));
};

module.exports = { getById, create, update, destroy, seedDB };
