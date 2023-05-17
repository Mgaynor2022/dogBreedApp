import React from 'react'


export default function DogCardClicked(props){

    const {
        _id,
        shedding,
        grooming,
        drooling,
        energy,
        max_life_expectancy,
        max_height_male,
        max_height_female,
        max_weight_male,
        max_weight_female

    } = props

    return (
        <div key={_id} className="items-center h-full font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
            <div className="p-5 text-center ">
                <h3 className="mb-2 text-md tracking-tight text-gray-600 "> Energy: {energy}</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Shedding: {shedding}</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Grooming: {grooming}</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Drooling: {drooling}</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Life Expectancy: {max_life_expectancy} Years</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Max Male Height: {max_height_male} in</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Max Female Height: {max_height_female} in</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Max Male Weight: {max_weight_male} lbs</h3>
                <h3 className="mb-2 text-md tracking-tight text-gray-600 ">Max Female Height: {max_weight_female} lbs</h3>
            </div>
        </div>

    )
}