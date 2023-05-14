const mongoose = require("mongoose")
const Schema = mongoose.Schema

const favoriteScheme = new Schema
(
    {
        name:String,
        sex:String,
        birthDate:String,
        ageString:String,
        adoptionFee:Number,
        breedPrimary:String,
        colorDetails:String,
        descriptionText:String,
        pictureThumbnailUrl:String,
        qualities:String,
        obedienceTraining:String
        

    }
)

module.exports = mongoose.model("Favorite",favoriteScheme)