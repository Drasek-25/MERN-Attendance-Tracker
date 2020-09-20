const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();

const index = require("./routes/index");

const app = Express();
const port = 3000;

// Body parser is used for req.body
app.use(BodyParser.json()); // for parsing application/json
app.use(BodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
console.log(process.env.TEST);
app.use("/index", index);
app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;
