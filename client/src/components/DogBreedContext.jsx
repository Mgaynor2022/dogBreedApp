import React, {useEffect, useState, createContext } from 'react'
import axios from "axios"
import '../css/App.css'


export const DataContext = createContext()

export default function DogBreedProvider(props) {
  
  const [searchBreed, setSearchBreed] = useState({
    name:""
  })
    const [dogBreed, setDogBreed] = useState([])
    const [favoriteDogBreed, setFavoriteDogBreed] = useState([])
    const [breedData, setBreedData] = useState([])
    
    function handleChange (e){
      const {name, value} = e.target
      setSearchBreed(prevBreed => {
        return {
          ...prevBreed,
          [name]:value
        }
      })
    }
   
    const apiBreedData = {
      method: 'GET',
      url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
      headers: {
        'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
        'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
      }
    };
    const apiDogBreed = {
      method: 'GET',
      url: `https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${searchBreed}`,
      params: {
        name: 'golden retriever'
      },
      headers: {
        'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
        'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
      }
    };

    const getBreedData = () => {
       axios.request(apiBreedData)
      .then(res => setBreedData(res.data))
      .catch(err => console.log(err))  
    }
    function handleSubmit(){
      axios.get(apiDogBreed)
      .then(res => setDogBreed(res.data))
      .catch(err => console.log(err))
    }

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
 
  
  useEffect(() => {
    // getBreedData()
    getFavoriteBreed()
    // getDogBreedData()
    console.log("Test Effect")
  }, [])
 
  return (
    <DataContext.Provider 
    value = {{ 
      handleChange, 
      handleSubmit,
      getFavoriteBreed,
      searchBreed,
      dogBreed,
      favoriteDogBreed,
      breedData
    }}>
          {props.children}
    </DataContext.Provider>
  )
}


