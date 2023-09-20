const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const ejsMate = require("ejs-mate")
const bcrypt = require("bcrypt")
const session = require("express-session")
const flash = require("connect-flash")
require('dotenv').config()

const login = require("./routes/login");
const content = require("./routes/content");

app.engine("ejs",ejsMate)
app.use(express.urlencoded({extended : true}));
app.use(session({secret : "gogogaga"}))
app.use(flash())
app.use("/user",login);
app.use("/BlogO",content);
app.use(express.static(path.join(__dirname,"public")));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log("PORT 3000 connected");
})