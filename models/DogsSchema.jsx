const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dogBreedScheme = new Schema (
    {
        image_link: String,
        good_with_children: Number,
        good_with_other_dogs: Number,
        shedding: Number,
        grooming: Number,
        drooling: Number,
        coat_length: Number,
        good_with_strangers: Number,
        playfulness: Number,
        protectiveness: Number,
        trainability: Number,
        energy: Number,
        barking: Number,
        min_life_expectancy: Number,
        max_life_expectancy: Number,
        max_height_male: Number,
        max_height_female: Number,
        max_weight_male: Number,
        max_weight_female: Number,
        min_height_male: Number,
        min_height_female: Number,
        min_weight_male: Number,
        min_weight_female: Number,
        name: String
    }

)

module.exports = mongoose.model("Dogs",dogBreedScheme)

