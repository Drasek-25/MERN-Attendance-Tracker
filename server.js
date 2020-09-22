const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const userRoutes = require("./routes/user-routes");
const classesRoutes = require("./routes/class-routes");

const app = Express();
const port = 8080;

// Body parser is used for req.body
app.use(BodyParser.json()); // for parsing application/json
app.use(BodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
         httpOnly: true,
         maxAge: parseInt(process.env.SESSION_MAX_AGE),
      },
   })
);
if (process.env.NODE_ENV === "development") {
   app.use((req, res, next) => {
      console.log(req.session);
      next();
   });
}
mongoose
   .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.74paq.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
   )
   .then(() => {
      app.use("/users", userRoutes);
      app.use("/class", classesRoutes);
      app.listen(port);
      console.log("Server live on port 8080");
   })
   .catch((err) => {
      console.log(err);
   });
