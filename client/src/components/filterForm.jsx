import React,{useContext, useState} from "react"
import { DataContext } from './DogBreedContext'


export default function SearchFilter(){

    const {generalInfo, breedFilter, genderFilter,  handleChange} = useContext(DataContext)

    const [BreedToggle, setBreedToggle] = useState(false)
    const [GenderToggle, setGenderToggle] = useState(false)

    const changeBreedToggle = () => {
        setBreedToggle(prevToggle => !prevToggle)
    }

    const changeGenderToggle = () => {
        setGenderToggle(prevToggle => !prevToggle)
    }

    return (
        <div  className>
            {BreedToggle &&
            <form className="flex item-center pl-5 pr-5"> 
                <input className="mb-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type= "text"
                    placeholder="Pet Breed"
                    name="userPetBreed"
                    value={generalInfo.userPetBreed}
                    onChange={handleChange}
                />
                <button onClick={(breedFilter)}
                class="p-2.5 ml-2 h-full text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                
            </form>

            }
                <button className="p-2.5 ml-5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={changeBreedToggle}>{BreedToggle ? "Close Search" : "Search By Breed"}</button>

            <div>
                {GenderToggle &&
                <form className="flex item-center pl-5 pr-5" onSubmit={genderFilter}> 
                    <input className="mt-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type= "text"
                        placeholder="Pet Gender"
                        name="userPetGender"
                        value={generalInfo.userPetGender}
                        onChange={handleChange}
                    />
                <button class="p-2.5 ml-2 h-full text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
            </form>
            }
                <button className="p-2.5 ml-5 mt-5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={changeGenderToggle}>{GenderToggle ? "Close Search" : "Search By Gender"}</button>
            </div>    
        </div>
    );

}