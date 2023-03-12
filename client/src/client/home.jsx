import React from 'react'



export default function HomePage(){

    return(
        
        <div class="font-sans font-thin p-12 bg-gray-200">
			<div class="w-full h-screen relative flex items-center">
				<img src="https://images.unsplash.com/photo-1583336663277-620dc1996580?w=1800" class="absolute top-0 left-0 w-full h-full object-cover" />

			<div class="relative z-10 px-24 text-center">
				<h2 class="mb-2 text-white uppercase text-2xl md:text-5xl leading-tight tracking-wide font-normal">Adopt A Pet</h2>
				<p class="text-white mb-6">Come find an adorable pet to give a home and to love.</p>
				<a href="/searchForm" class="inline-block uppercase bg-white py-3 px-6 text-xs">Get Started</a>
			</div>		
		</div>
		<div class="bg-gray-100 py-24 px-12 text-center">
			<h2 class="text-lg md:text-2xl mb-8">“Animals are reliable, many full of love, true in their affections, predictable in their actions, grateful and loyal.
             Difficult standards for people to live up to.” 
             <br></br>
             <br class="p-5 hidden lg:block" /> – Alfred A. Montapert</h2>
		</div>
    </div>


    )
}