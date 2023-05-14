const express = require("express")
const petDataRouter = express.Router()
const PetData = require("../models/PetDataSchema.jsx")


//Get All
petDataRouter.route("/")
.get((req,res,next) =>{
    PetData.find((err,data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//Post Pet Data to Database
petDataRouter.route("/").post((req,res,err) =>{
    console.log(req.body,"Testing Data being Requested")
    // Created a For loop so i can save each property of the array
    let savedData = []
    for(let i = 0; i < req.body.length -1; i++){
        const newData = new PetData(req.body[i])
        newData.save((err, savedData) => {
        //    console.log(err,"Test 2")
            if(err){
                res.status(500)
                return(err)
            }
            // console.log(savedData)
        })
    }
    return res.status(200).send(savedData)
})


// User Filter
petDataRouter.get("/search/breedPrimary",(req,res,next) => {
    PetData.find({breedPrimary: req.query.breedPrimary}, (err, breed) => {
        if(err){
            res.status(500)
            next(err)
        }
        return res.status(200).send(breed)
    })

})

petDataRouter.get("/search/sex",(req,res,next) => {
    PetData.find({sex: req.query.sex}, (err, gender) => {
        if(err){
            res.status(500)
            next(err)
        }
        return res.status(200).send(gender)
    })

})

petDataRouter.get("/search/animal",(req,res,next) => {
    PetData.find({animal: req.query.animal}, (err, name) => {
        if(err){
            res.status(500)
            next(err)
        }
        return res.status(200).send(name)
    })

})
module.exports = petDataRouter