import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import PetAdoptionContext from "./petAdoptionContext"
import HomePage from "./home"
import SearchForm from "./searchForm"
import FavoriteDisplay from "./favorite"




function App(){
    return (
        <div>
			<div>
				<header className="bg-white px-8 py-8 flex justify-between items-center">
					<h1 href="#" class="font-bold text-xl tracking-wider">AdoptAPet</h1>
					<ul className="hidden md:flex uppercase text-sm ml-8">

						<li>
							<Link className="text-gray-600" to="/home">Home</Link>
						</li>
						<li className="ml-8">
							<Link className="text-gray-600" to="/searchForm">Search</Link>
						</li>
						<li className="ml-8">
							<Link className="text-gray-600" to="/favorite">Favorites</Link>
						</li>

					</ul>
				</header>

            <PetAdoptionContext>
				<Routes>
					<Route index element = {<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/searchForm" element={<SearchForm />} />
					<Route path="/favorite" element={<FavoriteDisplay />}></Route>
				</Routes>
            </PetAdoptionContext>
			</div>
        </div>
	)
}

export default App
