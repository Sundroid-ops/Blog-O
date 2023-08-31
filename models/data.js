const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/BlogOApp')
    .then(d=>console.log("Data Connection Secured"))
    .catch(err=> console.log("Data Connection Error"));

const dataschema = new mongoose.Schema({
    username : {
        type : String
    },
    data : {
        title : {
            type : String
        },
        context : {
            type : String
        }
    },
    likes : {
        type : Number
    },
    Comments : {
        type : Number
    }
})

module.exports = mongoose.model("Data",dataschema);