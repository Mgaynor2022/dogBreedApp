import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'




export default function HomePage(){

    return(
        
     <div id='homePage' className="font-sans font-thin px-12 bg-gray-200">
			<div className="w-full h-screen relative flex items-center">
				<img id='homePicture' src="https://images.unsplash.com/photo-1583336663277-620dc1996580?w=1800"
				 className="absolute top-0 left-0 w-full h-full object-cover" />

			<div className="relative z-10 px-24 text-center">
				<h2 className="mb-2 text-white text-xl md:text-5xl leading-tight tracking-wide font-normal">Mans Best Friend</h2>
				<p className="text-white mb-6">Come find an adorable pet to give a home and to love.</p>
				<Link to="#searchBreed" smooth 
				className="uppercase bg-gray-200 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-700 py-3 px-6 text-xs">Get Started</Link>
			</div>		
		</div>
		<div className="bg-gray-100 py-24 px-12 text-center">
			<h2 className="text-lg md:text-2xl mb-8">“Animals are reliable, many full of love, true in their affections, predictable in their actions, grateful and loyal.
             Difficult standards for people to live up to.” 
             <br></br>
             <br className=" lg:block" /> – Alfred A. Montapert</h2>
		</div>
    </div>


    )
}