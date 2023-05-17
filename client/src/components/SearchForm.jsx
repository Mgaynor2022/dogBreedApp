import React,{useContext} from "react"
import { DataContext } from "./DogBreedContext"
import DogCard from "./DogCard"
import DogCardClicked from "./DogCardClicked"
import DogDataCard from "./DogDataCard"

export default function SearchForm(){

    const {searchBreed, handleSubmit, handleChange, dogBreed, cardToggle, toggle, breedData} = useContext(DataContext)

    return(
        <div id="searchBreed" className=" bg-gray-200 mx-12 ">
            <form onSubmit={handleSubmit} className="bg-gray-100 flex items-center px-24 py-24  z-50">            
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                         </div>

                         <input 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="name"
                        value={searchBreed.name}
                        onChange={handleChange}
                         placeholder="Dog Breed Ex. Labrador Retriever"
                         />

                    </div>
                    <button className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
                
                <div className="grid grid-cols-3 gap-4 ">
                    {dogBreed.map(breed => 
                        <div className="col-start-2 col-end-3">
                            <DogCard
                                {...breed}
                                cardToggle = {cardToggle}
                            />
                        </div>
                    )}

                    
                        {toggle &&
                        <>
                            {dogBreed.map(breed => 
                            <div className="col-start-3 col-end-4">
                                <DogCardClicked
                                    {...breed}/>
                            </div>     
                                )}
                                    </>
                                    }

                                {toggle &&
                                <>
                                <div className="col-start-1 row-start-1 ">
                                    <DogDataCard
                                        {...breedData}
                                        {...dogBreed}
                                    />
                                </div>
                                </>
                                }





                </div>
        </div>

    )

}