const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dogsDataScheme = new Schema (
    {
        breed:String,
        origin:String,
        url:String,
        meta:{
            color:String,
            notes:String
        }
    }

)

module.exports = mongoose.model("DogsData",dogsDataScheme)