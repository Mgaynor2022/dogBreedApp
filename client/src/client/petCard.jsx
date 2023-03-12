import React, {useContext} from 'react'
import { DataContext } from './petAdoptionContext'


function PetCard(){

    const {myDatabase,addFavoritesDb,petData} = useContext(DataContext)
    const displayPetData = myDatabase.map(data =>{
        
        return (
            <div class="max-w-sm border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">   
                <div class="rounded-lg shadow-lg bg-white m-5">
                    <img class="object-contain h-48 w-96 rounded-t-lg" src={data.pictureThumbnailUrl} alt="Pet Image"/>
                    <div class=" p-6">
                        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                        <p class="text-gray-700 text-base mb-3">{data.sex} {data.breedPrimary} {data.ageString}</p>
                        <p class="text-gray-700 text-base mb-3">{data.obedienceTraining} {data.newPeopleReaction}</p>
                        <p class="text-ellipsis overflow-hidden ... text-gray-700 text-base mb-3">{data.descriptionUrl}</p>
                        
                        <button type="button" onClick={() => addFavoritesDb(data)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add To Favorites
                        </button>
                    </div>
                </div>
            </div>
       
        )
    })
    return (
        <div class="grid grid-cols-3 gap-2 mt-5">
            {displayPetData}
        </div>
    )
}

export default PetCard