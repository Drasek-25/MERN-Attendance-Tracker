const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user-routes");

const app = Express();
const port = 8080;

// Body parser is used for req.body
app.use(BodyParser.json()); // for parsing application/json
app.use(BodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose
   .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.74paq.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
   )
   .then(() => {
      app.use("/users", userRoutes);
      app.listen(port);
      console.log("Server live on port 8080");
   })
   .catch((err) => {
      console.log(err);
   });
