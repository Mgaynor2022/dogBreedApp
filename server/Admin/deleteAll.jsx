const mongoose = require("mongoose")
const PetData = require("../models/PetDataSchema.jsx")


mongoose.connect(
    'mongodb+srv://mgaynor228:nByrsNCBfjmcj2gy@petadoption.cj1glkk.mongodb.net/?retryWrites=true&w=majority',
    ()=> console.log("Connected to MongoDB"))

PetData.deleteMany({}).then((result) =>{
    console.log(result)
})

// Type node deleteAll.jsx in the terminal 
