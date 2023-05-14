const mongoose = require("mongoose")
const Schema = mongoose.Schema


const petDataScheme = new Schema
(
    {
        animal:String,
        name:String,
        sex:String,
        birthDate:String,
        ageString:String,
        adoptionFee:Number,
        searchString:String,
        rescueId:String,
        breedPrimary:String,
        summary:String,
        url:String,
        colorDetails:String,
        descriptionText:String,
        pictureThumbnailUrl:String,
        obedienceTraining:String,
        newPeopleReaction:String

    }
)
module.exports = mongoose.model("PetData",petDataScheme)