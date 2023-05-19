import React from "react"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./components/HomePage.jsx"
import SearchForm from "./components/SearchForm.jsx"
import FavoriteDisplay from "./components/Favorite.jsx"
import Footer from "./components/Footer.jsx"

function App(){
    return (
		<>
			<Navbar />
			<HomePage />
			<SearchForm />
			<FavoriteDisplay />
			<Footer />
		</>
			
		
       
	)
}

export default App
