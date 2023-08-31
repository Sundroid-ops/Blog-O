const mongoose = require("mongoose")
const Data = require("./data")
const bcrypt = require("bcrypt")

mongoose.connect('mongodb://127.0.0.1:27017/BlogOApp')
    .then(d=>console.log("Users Connection Secured"))
    .catch(err=> console.log("Users Connection Error"));

const userschema = new mongoose.Schema({
    username : {
        type : String,
        min : 4,
        required : true,
        unique : true
    },
    password : {
        type : String,
        min : 4,
        required : true
    },
    data : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Data"
        }
    ]
})

userschema.statics.FindAndValidate= async function(username,password){ //static function which runs for the whole class not just an object
    const found_user = await this.findOne({username})
    if(found_user && bcrypt.compareSync(password , found_user.password)){
        return found_user;
    }
    return false;
}

userschema.pre("save", async function(next){ // runs before mongo saves the data
    this.password = await bcrypt.hash(this.password,10)
    next();
})

const Users = mongoose.model("Users",userschema);
module.exports = Users;