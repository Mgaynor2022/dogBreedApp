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
            <div id='dogCard' key={_id} onClick={cardToggle} className="font-sans font-thin bg-white border border-gray-200 rounded-lg transform hover:scale-90 duration-500 ">
            <img className="rounded-t-lg" src={image_link} alt="dogBreed" />
            <div className="p-5 text-md tracking-tight ">
                <h1 id='dogName' className="mb-2 text-3xl tracking-tight text-center">{name}</h1>
                <h3 className="mb-2">Good With Kids:<span>{good_with_children}</span></h3>
                <h3 className="mb-2">Good With Strangers:{good_with_strangers}</h3>
                <h3 className="mb-2">Playfulness:{playfulness}</h3>
                <h3 className="mb-2">Trainable:{trainability}</h3>
            </div>
        </div>
           
    
            )
            
}

export default DogCard