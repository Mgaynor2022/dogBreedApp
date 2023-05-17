import React, {useContext,useEffect} from "react"
import { DataContext } from "./DogBreedContext"
import DogCard from "./DogCard"

export default function FavoriteDisplay(){

    const {favoriteDogBreed, getFavoriteBreed} = useContext(DataContext)

    useEffect(() => {
        getFavoriteBreed()
        console.log("Test Favorite")
      }, [])

    return (
        <div id='favorites'className='p-12 bg-gray-200'>
                <div className="bg-gray-100 py-24 px-12 text-center ">
                    <h2 className=" font-sans font-thin text-lg md:text-2xl mb-8 ">
                    Here are 20 of the worlds favorite Dog Breeds !!</h2>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {favoriteDogBreed.map(favorite => 
                        <>
                        <DogCard
                            {...favorite}
                        />
                        </>
                    )}
                </div>
            </div>
    )
    
}