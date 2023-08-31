const express = require("express")
const router = express.Router();

const Data = require("../models/data")
const Users = require("../models/users")

const require_login = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/user/login")
    }
    next();
}

router.get("/", require_login ,async(req,res)=>{
    const user_data = await Data.find({});
    const user_info = await Data.find({});
    res.render("content/home",{msg : req.flash("Success"),user_data})
})

router.


module.exports=router;