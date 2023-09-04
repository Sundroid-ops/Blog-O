const mongoose = require("mongoose");
const User = require("./users")

mongoose.connect('mongodb://127.0.0.1:27017/BlogOApp')
    .then(d=>console.log("Data Connection Secured"))
    .catch(err=> console.log("Data Connection Error"));

const dataschema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    data :  [
        {
            title : {
                type : String,
            }
        },
        {
            context : {
                type : String,
            }
        }
    ],
    likes : {
        type : Number
    },
    Comments : [
        {
            type : Number
        }
    ]
})

const Data = mongoose.model("Data",dataschema);
module.exports=Data;