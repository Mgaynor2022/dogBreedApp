import React from "react";
import {FiExternalLink} from 'react-icons/fi'

export default function DogDataCard(props){

    const { name } = props
    console.log(name)

    return (
        <div className="flex flex-col items-center justify-center h-full font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
        <div className="p-5">
            <h1 className="mb-2 text-3xl tracking-tight text-gray-900 text-center"> 
            Click If You Want To Learn More About {name} Dog Breed !</h1>
        </div>
        <a href={`https://en.wikipedia.org/wiki/${name} dog`} rel="noopener noreferrer nofollow" target='_blank'>
            <FiExternalLink size='3rem' />
        </a>
    </div>
    )
}