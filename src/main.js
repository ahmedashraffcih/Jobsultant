import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
// Required Modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const session = require("express-session");
// const MongoDBStore = require('connect-mongodb-session')('session')
// const MongoDBStore = require('connect-mongo')('session')
const cors = require("cors");
const cookie = require("cookie-parser");
const PORT = 3000;

//Database connection
let url =
  "mongodb+srv://Seif:00774400@jobsultant.nnpaa.mongodb.net/jobsultant?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  else {
    console.log("Database connected");
  }
});

//Routers
const JobRouter = require("./api/router/JobRouter.js");
const UserRouter = require("./api/router/UserRouter.js");

//Session Store
// var STORE = new MongoDBStore({
//   url: 'mongodb+srv://Seif:00774400@jobsultant.nnpaa.mongodb.net/jobsultant?retryWrites=true&w=majority',
//   collection: 'Sessions'
// });

//MiddleWares
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(BodyParser.json());
app.use("/jobs", JobRouter);
app.use(UserRouter);
app.use(
  session({
    secret: "hello there we are authenticating now",
    saveUninitialized: true,
    resave: true,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);
app.use(cookie());

//listen to the port number 3000 "Connection to server"
app.listen(PORT, () => {
  console.log("We are connected to port 3000");
});
