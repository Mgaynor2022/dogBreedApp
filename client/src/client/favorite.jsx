import React, {useContext} from "react"
import { DataContext } from "./petAdoptionContext"


export default function FavoriteDisplay(){
    const {favoriteList,deleteFavoritesDb} = useContext(DataContext)

    return (
        <div class="grid grid-cols-2 gap-2 mt-5">
            {favoriteList && favoriteList.map(data =>{          
            return (
                <div class="flex justify-center">   
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={data.pictureThumbnailUrl} alt=""/>
                     <div class="p-6">
                         <h5 class="text-gray-900 text-xl font-medium mb-2">
                            {data.name}, {data.breedPrimary}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {data.sex}              
                        </p>
                        <button 
                        type="button" 
                        onClick={()=>deleteFavoritesDb(data._id)} 
                        class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Delete From Favorites</button>
                    </div>
                </div>
            </div>
            )
        })
    }
        </div>
    )
}