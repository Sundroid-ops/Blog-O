const express = require("express")
const router = express.Router();

const require_login = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/user/login")
    }
    next();
}

router.get("/", require_login ,(req,res)=>{
    res.render("content/home",{msg : req.flash("Success")})
})


module.exports=router;