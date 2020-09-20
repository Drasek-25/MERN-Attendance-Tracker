const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mongoUser, mongoPw, mongoName } = require("./config");

const index = require("./routes/index");

const app = Express();
const port = 3000;

// Body parser is used for req.body
app.use(BodyParser.json()); // for parsing application/json
app.use(BodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/index", index);
// app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;

mongoose
   .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.74paq.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
   )
   .then(() => {
      app.listen(8080);
      console.log("Server live on port 8080");
   })
   .catch((err) => {
      console.log(err);
   });
