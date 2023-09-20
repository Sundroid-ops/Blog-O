const express = require("express")
const router = express.Router();
const multer  = require('multer')
const {storage} = require("../cloudinary/cloud")
const dayjs = require("dayjs")

const upload = multer({storage})

const Users = require("../models/users");
const Data = require("../models/data");

const require_login = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect("/user/login")
    }
    next();
}

router.use(require_login);

router.get("/",async(req,res)=>{
    const user_data = await Data.find({}).populate("Owner");
    const logged_id = req.session.user_id;
    res.render("content/home",{msg : req.flash("Success"),user_data,logged_id});
})

router.get("/upload/:id",(req,res)=>{
    const logged_id = req.session.user_id;
    res.render("content/upload",{logged_id});
})

router.post("/upload/:id/post", upload.array("cover"), async(req,res)=>{
    const user = await Users.findById(req.params.id);
    const new_data = new Data(req.body);
    new_data.Owner=user;
    req.files.path && new_data.images.push({url : req.files[0].path , filename : req.files[0].filename})
    await new_data.save();
    await user.save();
    res.redirect("/BlogO");
})

module.exports=router;