import React, {useContext} from "react"
import { DataContext } from "./DogBreedContext"

export default function FavoriteDisplay(){

    const {favoriteDogBreed} = useContext(DataContext)

    return (
        <div className=" cursor-pointer font-sans font-thin bg-gray-200 grid grid-cols-4 gap-4">

        </div>
    )
    
}