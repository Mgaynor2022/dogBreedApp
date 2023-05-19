import React, {useState, createContext } from 'react'
import axios from 'axios'
import '../css/App.css'


export const DataContext = createContext()

export default function DogBreedProvider(props) {
  
  const [searchBreed, setSearchBreed] = useState({
    name:""
  })
    const [dogBreed, setDogBreed] = useState([])
    const [favoriteDogBreed, setFavoriteDogBreed] = useState([])
    const [breedData, setBreedData] = useState([])
    const [toggle, setToggle] = useState(false)
    
    function handleChange (e){
      const {name, value} = e.target
      setSearchBreed(prevBreed => {
        return {
          ...prevBreed,
          [name]:value
        }
      })
    }
    function cardToggle(){
      setToggle(prevToggle => !prevToggle)
    }
    const getBreedData = () => {
       axios.request({
        method: 'GET',
        url: `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${searchBreed}`,
        headers: {
          'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
          'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
      })
      .then(res => setBreedData(res.data))
      .catch(err => console.log(err))  
    }
    // const key = process.env.X-RAPIDAPI-KEY
    // const host = process.env.X-RAPIDAPI-HOST

    function handleSubmit(e){
      e.preventDefault()
      axios({
        method: 'GET',
        url: `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs`,
        params: {
          name:`${searchBreed.name}`
        },
        headers: {
          'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
          'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
        }
      })
      .then(res => setDogBreed(res.data))
      .catch(err => console.log(err))
    }
    console.log(breedData)

    function getFavoriteBreed(){
      axios.get("/api/dogBreed")
    .then(res => setFavoriteDogBreed(res.data))
    .catch(err => console.log(err))
  }
  function deleteDogBreed(dogsId){
    axios.delete(`/api/dogBreed/${dogsId}`)
    .then(res => {
      setFavoriteDogBreed(prevFav => prevFav.filter(breed._id !== dogsId))
    })
    .catch(err => console.log(err))
  }

  return (
    <DataContext.Provider 
    value = {{ 
      handleChange, 
      handleSubmit,
      getFavoriteBreed,
      searchBreed,
      dogBreed,
      favoriteDogBreed,
      breedData,
      cardToggle,
      toggle,
    }}>
          {props.children}
    </DataContext.Provider>
  )
}


