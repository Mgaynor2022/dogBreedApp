import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as  Router} from "react-router-dom"
import DogBreedProvider from './components/DogBreedContext'
import App from './App'
import "./css/App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <DogBreedProvider>
          <App />
        </DogBreedProvider>
    </Router>
      
  </React.StrictMode>,
)
