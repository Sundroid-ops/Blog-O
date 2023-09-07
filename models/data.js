const mongoose = require("mongoose");
const User = require("./users")

mongoose.connect('mongodb://127.0.0.1:27017/BlogOApp')
    .then(d=>console.log("Data Connection Secured"))
    .catch(err=> console.log("Data Connection Error"));

const dataschema = new mongoose.Schema({
    Owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    title : {
        type : String
    },
    context : {
        type : String
    },
    likes : {
        type : Number,
        default : 0
    },
    Comments : [
        {
            type : Number,
            default : 0
        }
    ],
    Date : {
        type : Date,
        default : Date.now
    }
})

const Data = mongoose.model("Data",dataschema);
module.exports=Data;