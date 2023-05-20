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

// dogsDataRouter.post("/", (req,res,next) =>{
//     const newDog = new DogsData(req.body)
//     newDog.save((err, savedDog) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(savedDog)
//     })
// })

// POST multiple entries
dogsDataRouter.post('/', function(req, res, next) {
  const newDogs = new DogsData(req.body.serverDogsData)
  newDogs.save((err, savedDog) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send()
  })

    // Array of JSON Objects
    //  (req.body.serverDogsData){
    //   DogsData.create(req.body.serverDogsData, function(err){
    //     if(err){
    //         res.status(500)
    //         return next(err) ;

    //     } return res.status(201).send(req.body.serverDogsData);
    //   });
    // }
    // Single JSON Object
    // else {
    //   var newDog = new DogsData(req.body);
    
    //   // New User is saved in the db.
    //   newDog.save(function(err){
    //     if(err)
    //       res.send(err);
    
    //     // If no errors are found, it responds with a JSON of the new user
    //     else
    //       res.send(req.body);
    //   });
    // }
    });

// db.collection('dogs').insertMany(req.body.serverDogsData, function(err,data){
//     if(err) console.log(err);
//     else console.log('Data Was Added To server')
// })

module.exports = dogsDataRouter