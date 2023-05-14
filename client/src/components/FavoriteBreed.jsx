import React from 'react'
import DogCard from './DogCard'


export default function FavoriteDogBreed(props){

    const {favoriteDogBreed, dogBreedData} = props

    return (
        <div className=" grid grid-cols-4 gap-4">
            {favoriteDogBreed && favoriteDogBreed.map( favorite =>
                <>
                    <DogCard
                        {...favorite} 
                        {...dogBreedData} 
                    />
                </>
                
            )}
        </div>
    )

   
}