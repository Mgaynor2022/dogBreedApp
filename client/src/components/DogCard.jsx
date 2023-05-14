import React, {useContext} from 'react'
import { DataContext } from './DogBreedContext'
import {BsLink45Deg} from 'react-icons/bs'
import {HiExternalLink} from 'react-icons/hi'


function DogCard (props){

    const {favoriteDogBreed, breedData} = useContext(DataContext)


    const displayFavorite = favoriteDogBreed && favoriteDogBreed.map(favorite => {
        return (
        <div key={favorite._id} className="items-center bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
            <img className="rounded-t-lg" src={favorite.image_link} alt="dogBreed" />
            <div className="p-5">
                <h1 className="mb-2 text-xl tracking-tight text-gray-900 text-center">{favorite.name}</h1>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Good With Kids:<span>{favorite.good_with_children}</span></h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Good With Strangers:{favorite.good_with_strangers}</h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Playfulness:{favorite.playfulness}</h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Trainable:{favorite.trainability}</h3>
                {/* <BsLink45Deg cursor='pointer'  /> */}
                {/* <HiExternalLink className='text-blue-700 hover:text-gray-500' cursor='pointer'>More Attributes</HiExternalLink> */}
            </div>
        </div>
        )
    })
    
        return (
            <div id='favorites' className='p-12 bg-gray-200'>
                <div className="bg-gray-100 py-24 px-12 text-center ">
                    <h2 className=" font-sans font-thin text-lg md:text-2xl mb-8 ">Here are 20 of the worlds favorite Dog Breeds !!</h2>

                </div>
                <div className=" cursor-pointer font-sans font-thin grid grid-cols-4 gap-4">
                    {displayFavorite}
                </div>

            </div>
          
            )
            
}

export default DogCard