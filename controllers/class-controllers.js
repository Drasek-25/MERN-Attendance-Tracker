const Classes = require("../models/classes");
const { classesSeed } = require("./../data/classes");

// router.get("/", classController.getById);
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
// router.post("/", classController.create);

// router.put("/", classController.update);

// router.delete("/", classController.destroy);

// router.post("/seed", classController.seedDB);

module.exports = { getById };
