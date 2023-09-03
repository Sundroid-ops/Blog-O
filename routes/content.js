const express = require("express")
const router = express.Router();

const Data = require("../models/data")
const User = require("../models/users")

const require_login = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/user/login")
    }
    next();
}

router.get("/", require_login ,async(req,res)=>{
    const user_data = await Data.find({});
    const logged_id = req.session.user_id;
    res.render("content/home",{msg : req.flash("Success"),user_data,logged_id});
})

router.get("/write/:id", require_login ,(req,res)=>{
    const logged_id = req.session.user_id;
    res.render("content/write",{logged_id});
})

module.exports=router;