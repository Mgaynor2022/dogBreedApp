import React, {useContext,useEffect, useState} from "react"
import { DataContext } from "./DogBreedContext"
import DogCard from "./DogCard"
import {FaDog} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

export default function FavoriteDisplay(){

    const {favoriteDogBreed, getFavoriteBreed} = useContext(DataContext)

    useEffect(() => {
        getFavoriteBreed()
        console.log("Test Favorite")
      }, [])

      const[displayFavorite, setDisplayFavorite] = useState(false)

      const favoriteToggle = () => {
        setDisplayFavorite(!displayFavorite)
      }
      console.log(displayFavorite)

    return (
        <div id='favorites'className= 'p-12 bg-gray-200'>
                <div className="bg-gray-100 py-24 px-12 text-center ">
                    <h2 className=" font-sans font-thin text-lg md:text-2xl mb-8 ">
                    Here are 20 of the worlds favorite Dog Breeds !!</h2>
                <button onClick={favoriteToggle}
                className="p-2.5 ml-2 bg-gray-200 rounded-lg border border-black hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-700">
                        <FaDog />
                    </button>
                </div>
            
                <div id="favoriteBreed" className={displayFavorite ? "grid grid-cols-4 gap-4": 'hidden'}>
                    {favoriteDogBreed.map(favorite => 
                    <Fade top duration={1500} >
                        <>
                        <DogCard
                            {...favorite}
                        />
                        </>
                    </Fade>
                    )}
                </div>
            </div>
    )
    
}