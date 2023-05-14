const express = require("express")
const dogsRouter = express.Router()
const Dogs = require("../models/DogsSchema.jsx")


//Get All
dogsRouter.route("/")
.get((req,res,next) => {
    Dogs.find((err, dog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dog)
    })
})

//Get One 
dogsRouter.get("/name", (req,res,next) => {
    Dogs.find({name:req.query.name}, (err,dog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dog)
    })
})

// //Post Favorites To The DataBase
dogsRouter.post("/", (req,res,next) =>{
    const newDog = new Dogs(req.body)
    newDog.save((err, savedDog) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedDog)
    })
})

//Delete 
dogsRouter.delete("/:dogsId", (req,res, next) =>{
    Dogs.findOneAndDelete({_id: req.params.dogsId},(err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Dog Breed: ${deletedItem.name} Was Deleted`)
    })
})

module.exports = dogsRouter