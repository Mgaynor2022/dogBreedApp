const express = require("express")
const dogsDataRouter = express.Router()
const DogsData = require("../models/DogsDataSchema.jsx")


//Get All
dogsDataRouter.route("/")
.get((req,res,next) => {
    DogsData.find((err, dogs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dogs)
    })
})

dogsDataRouter.post("/", (req,res,next) =>{
    const newDog = new DogsData(req.body)
    newDog.save((err, savedDog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedDog)
    })
})

module.exports = dogsDataRouter