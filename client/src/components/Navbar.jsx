import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {GiJumpingDog} from 'react-icons/gi'



export default function Navbar(){
    const [navbar,setNavbar] = useState(false)

    const showNavbar = () => {
        if(window.scrollY >= 500){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", showNavbar)


    return (
        
        <header className="fixed w-full z-50">
            <nav className=' px-8 py-5 flex justify-between bg-gray-200 items-center'>
            <div className='flex items-center'>
			    <h1 href="#" class="font-bold text-xl tracking-wider">dogBreed App</h1>
                <GiJumpingDog className='ml-5' size='2.5rem' />
            </div>
					<ul className="hidden md:flex uppercase text-sm ml-8">

						<li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to='#homePage' smooth>Home</Link>
						</li>
						<li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="#searchBreed" smooth>Search</Link>
						</li>
						<li className="ml-8 text-gray-600 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="#favorites" smooth>Favorites</Link>
						</li>

					</ul>

            </nav>
				</header>
    )
}