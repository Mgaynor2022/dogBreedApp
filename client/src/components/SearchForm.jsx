import React,{useContext} from "react"
import Fade from 'react-reveal/Fade'
import { DataContext } from "./DogBreedContext"
import DogCard from "./DogCard"
import DogCardClicked from "./DogCardClicked"
import DogDataCard from "./DogDataCard"
import {BsSearch} from 'react-icons/bs'

export default function SearchForm(){

    const {searchBreed, handleSubmit, handleChange, dogBreed, cardToggle, toggle} = useContext(DataContext)

    return(
        <div id="searchBreed" className=" bg-gray-200 w-full h-full pt-24 p-12">
             <div className="bg-gray-100 py-12 px-12 text-center ">
                    <h2 className=" text-lg md:text-2xl mb-8 ">
                    Come Search For The Best Dog Breed The World Has To Offer !!</h2>
            <form id="searchForm" onSubmit={handleSubmit} className=" bg-gray-100 flex justify-center items-center px-24 py-8 z-50">            
                <div className="relative w-1/2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsSearch />
                         </div>

                         <input 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " 
                        name="name"
                        value={searchBreed.name}
                        onChange={handleChange}
                        placeholder="Dog Breed Ex. Golden Retriever"
                        />

                    </div>
                    <button className="p-2.5 ml-2 bg-gray-200 rounded-lg border border-black hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-700">
                        <BsSearch />
                    </button>
                </form>
                <p className="text-md m-5">
                    Each attribute is measured on a scale of values from 1-5.</p>
                    <p className="text-md ">1 being the worst and 5 being the best.</p>
                    </div>
                    
                
                <div id="searchGrid" className="grid grid-cols-3 gap-4 mt-12 ">
                    {dogBreed.map(breed => 
                    <Fade top duration={1500}>
                        <div className=" cursor-pointer col-start-2 col-end-3">
                            <DogCard
                                {...breed}
                                cardToggle = {cardToggle}
                                />
                        </div>
                    </Fade>
                    )}

                    
                        {toggle &&
                        <>
                            {dogBreed.map(breed => 
                            <Fade left duration={1500}>
                                <div id="card2" className="col-start-3 col-end-4">
                                    <DogCardClicked
                                        {...breed}/>
                                </div>     
                            </Fade>
                                )}
                                    </>
                                    }

                                {toggle &&
                                <>
                                {dogBreed.map(breed => 
                                <Fade right>
                                    <div id="card3" className="col-start-1 row-start-1 ">
                                        <DogDataCard
                                            searchBreed = {searchBreed}
                                            {...breed}
                                        />
                                    </div>
                                </Fade>
                                    )}
                                </>
                                }

                </div>
        </div>

    )

}