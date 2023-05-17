import React,{useState} from 'react'
import {BsLink45Deg} from 'react-icons/bs'
import {HiExternalLink} from 'react-icons/hi'


function DogCard (props){

    const {
        cardToggle,
        _id,
        image_link,
        name,
        good_with_children,
        good_with_strangers,
        playfulness,
        trainability
    } = props

        return (
            <div key={_id} onClick={cardToggle} className="items-center font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
            <img className="rounded-t-lg" src={image_link} alt="dogBreed" />
            <div className="p-5">
                <h1 className="mb-2 text-xl tracking-tight text-gray-900 text-center">{name}</h1>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Good With Kids:<span>{good_with_children}</span></h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Good With Strangers:{good_with_strangers}</h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Playfulness:{playfulness}</h3>
                <h3 className="mb-2 text-sm tracking-tight text-gray-600 ">Trainable:{trainability}</h3>
                {/* <BsLink45Deg cursor='pointer'  /> */}
                {/* <HiExternalLink className='text-blue-700 hover:text-gray-500' cursor='pointer'>More Attributes</HiExternalLink> */}
            </div>
        </div>
           
    
            )
            
}

export default DogCard