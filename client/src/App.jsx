import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
import DogCard from './components/DogCard.jsx'
import SearchForm from "./components/SearchForm.jsx"
// import FavoriteDisplay from "./favorite"

function App(){
    return (
		<div className="">
			<Navbar />
			<HomePage />
			<SearchForm />
			<DogCard />

		</div>
		
       
	)
}

export default App
