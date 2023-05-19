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
        <div key={_id} className="flex flex-col items-center justify-center  h-full font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
            <div className="p-5 text-center text-xl tracking-tight ">
                <h3 className="mb-2 "> Energy: {energy}</h3>
                <h3 className="mb-2 ">Shedding: {shedding}</h3>
                <h3 className="mb-2 ">Grooming: {grooming}</h3>
                <h3 className="mb-2 ">Drooling: {drooling}</h3>
                <h3 className="mb-2 ">Life Expectancy: {max_life_expectancy} Years</h3>
                <h3 className="mb-2 ">Max Male Height: {max_height_male} in</h3>
                <h3 className="mb-2 ">Max Female Height: {max_height_female} in</h3>
                <h3 className="mb-2 ">Max Male Weight: {max_weight_male} lbs</h3>
                <h3 className="mb-2 ">Max Female Height: {max_weight_female} lbs</h3>
            </div>
        </div>

    )
}