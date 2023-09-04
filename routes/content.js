const express = require("express")
const router = express.Router();

const User = require("../models/users");
const Data = require("../models/data");

const require_login = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/user/login")
    }
    next();
}

router.use(require_login);

router.get("/",async(req,res)=>{
    const user_data = await Data.find({});
    const logged_id = req.session.user_id;
    res.render("content/home",{msg : req.flash("Success"),user_data,logged_id});
})

router.get("/upload/:id",(req,res)=>{
    const logged_id = req.session.user_id;
    res.render("content/upload",{logged_id});
})

router.post("/upload/:id/post", async(req,res)=>{
    const user = await User.findById(req.params.id);
    const new_data = new Data({
        data : [
            {
                title : req.body.title
            },
            {
                context : req.body.body
            }
        ],
        likes : 0,
        comments : 0
    });
    new_data.owner=user;
    user.data.push(new_data);
    await new_data.save();
    await user.save();
    res.redirect("/")
})

module.exports=router;