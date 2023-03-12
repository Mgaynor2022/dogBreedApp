const express = require("express")
const favoritesRouter = express.Router()
const Favorite = require("../models/FavoriteSchema.jsx")


//Get All
favoritesRouter.route("/")
.get((req,res,next) => {
    Favorite.find((err, favorite) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(favorite)
    })
})

//Post Favorites To The DataBase
favoritesRouter.post("/", (req,res,next) =>{
    const newFavorite = new Favorite(req.body)
    newFavorite.save((err, savedFavorite) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedFavorite)
    })
})

favoritesRouter.delete("http://localhost:3500/FavoritePage/:favoriteId", (res,req,next) => {
    Favorite.findOneAndDelete({_id: req.params.favoriteId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Item ${deletedItem.name} Was Deleted`)
    })
})

module.exports = favoritesRouter