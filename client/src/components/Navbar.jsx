import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {GiJumpingDog} from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'


export default function Navbar(){
    
    const [navbar,setNavbar] = useState(false)

    function toggleMobile(){
        setNavbar(!navbar)
    }

    return (
        
        <header className="fixed w-full z-50">
            <nav id='bigNavbar' className=' px-8 py-5 flex justify-between bg-gray-200 items-center'>
            <div className='flex items-center'>
			    <h1 className="font-bold text-xl tracking-wider">dogBreed App</h1>
                <GiJumpingDog className='ml-5' size='2.5rem' />
            </div>
					<ul className = "flex uppercase text-sm ml-8">
						<li className="ml-8 text-gray-600 transition delay-75 hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to='#homePage' smooth>Home</Link>
						</li>
						<li className="ml-8 text-gray-600 transition hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="#searchBreed" smooth>Search</Link>
						</li>
						<li className="ml-8 text-gray-600 transition hover:underline hover:decoration-4 hover:underline-offset-8">
							<Link to="#favorites" smooth>Favorites</Link>
						</li>

					</ul>
            </nav>
                <div id='mobile'>
                <nav  className={'px-2 py-5  bg-gray-200 items-center' }>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <h1 className="font-bold text-xl tracking-wider">dogBreed App</h1>
                        <GiJumpingDog className='ml-5' size='2.5rem' />
                    </div>
                    <RxHamburgerMenu className=' cursor-pointer mr-2 text-gray-600' onClick={toggleMobile} size='2em'  />
                </div>

                <div className={navbar ? "flex justify-center tracking-wide w-full z-50 bg-gray-200" : "hidden"} id="navbar-hamburger">
                    <ul id='mobileNavbar' className = "flex flex-col uppercase text-lg text-center ml-8 pt-10">
                                <li className="ml-8 text-gray-600 transition delay-75 hover:underline hover:decoration-4 hover:underline-offset-8">
                                    <Link to='#homePage' smooth>Home</Link>
                                </li>
                                <li className="ml-8 text-gray-600 transition hover:underline hover:decoration-4 hover:underline-offset-8">
                                    <Link to="#searchBreed" smooth>Search</Link>
                                </li>
                                <li className="ml-8 text-gray-600 transition hover:underline hover:decoration-4 hover:underline-offset-8">
                                    <Link to="#favorites" smooth>Favorites</Link>
                                </li>
                            </ul>
                </div>
                </nav>

            </div>
		</header>
    )
}