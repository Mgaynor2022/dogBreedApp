import React from "react";
import {FiExternalLink} from 'react-icons/fi'

export default function DogDataCard(props){

    const {
        name,
        url
    } = props

    return (
        <div className="h-full cursor-pointer font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
        <div className="p-5">
            <h1 className="mb-2 text-xl tracking-tight text-gray-900 text-center"> 
            Click If You Want To Learn More About {name} Dog Breed !</h1>
        </div>
        <FiExternalLink size='2.5rem' />
    </div>
    )
}