const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const session = require("express-session")
const flash = require("connect-flash")

const Users = require("./models/users")

const login = require("./routes/login");
const content = require("./routes/content");

mongoose.connect('mongodb://127.0.0.1:27017/BlogOApp')
    .then(d=>console.log("Mongoose Connection Secured"))
    .catch(err=> console.log("Mongoose Connection Error"));

app.use(express.urlencoded({extended : true}));
app.use(session({secret : "gogogaga"}))
app.use(flash())
app.use("/user",login);
app.use("/BlogO",content);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log("PORT 3000 connected");
})