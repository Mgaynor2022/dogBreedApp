import React, {useEffect, useState, useContext, createContext } from 'react'
import axios from "axios"
import '../css/App.css'

export const DataContext = createContext()

export default function PetAdoptionContext(props) {

  const [generalInfo, setGeneralInfo] = useState(
    {
    userPetType:"",
    userPetGender:"",
    userPetBreed:""
   }
  )
  const [inputData, setInputData] = useState('')
  const [petData, setPetData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [favoriteList, setFavoriteList] = useState([])
  const [myDatabase, setMyDatabase] = useState([])

  function handleChange (e){
    const {name, value} = e.target
    setGeneralInfo(prevInfo =>{
      return {
        ...prevInfo,
        [name]:value
      }
    })
  }

//    const apiData = petData.map(data =>{
//     return {
//       // animal:generalInfo.userPetType,
//       animal:"cats",
//       name:data.attributes.name,
//       sex:data.attributes.sex,
//       birthDate:data.attributes.birthDate,
//       ageString:data.attributes.ageString,
//       adoptionFee:data.attributes.adoptionFee,
//       searchString:data.attributes.searchString,
//       rescueId:data.attributes.rescueId,
//       breedPrimary:data.attributes.breedPrimary,
//       summary:data.attributes.summary,
//       url:data.attributes.url,
//       colorDetails:data.attributes.colorDetails,
//       descriptionText:data.attributes.descriptionText,
//       pictureThumbnailUrl:data.attributes.pictureThumbnailUrl,
//       obedienceTraining:data.attributes.obedienceTraining,
//       newPeopleReaction:data.attributes.newPeopleReaction
//     }
//   }
// )
const animalSearch =
   [
      "cats","dogs",
      "rabbits","hamsters",
      "snakes","fish",
      "ferrets","iguanas",
      "lizards","turtles",
  ]
   

  // async function handleSubmit(e){
  //   e.preventDefault()
  //   const userSearch = {
  //     method: 'get',
  //     url: `https://api.rescuegroups.org/v5/public/animals/search/available/cats/?limit=50&include=pictures`,
  //     headers: { 
  //       'Content-Type': 'application/vnd.api+json', 
  //       'Authorization': 'pB7YZnmH'
  //     }
  //   };
  //   await axios(userSearch)
  //   .then(res => setPetData(res.data.data))
  //   .catch(err => console.log(err))

  //   await axios.post("http://localhost:3500/PetDataPage",apiData )
  //   .then(res => setMyDatabase(res.data))
  //   .catch(err => console.log(err)) 
  // }
  function handleSubmit(e){
    e.preventDefault()
    axios.get(`http://localhost:3500/PetDataPage/search/animal?animal=${generalInfo.userPetType}`)
    .then(res => setMyDatabase(res.data))
    .catch(err => console.log(err))
  }
  
  function getDataBaseData(){
    axios.get("http://localhost:3500/PetDataPage")
    .then(res => setMyDatabase(res.data))
    .catch(err => console.log(err))
  }


  function breedFilter(e){
    e.preventDefault()
    axios.get(`http://localhost:3500/PetDataPage/search/breedPrimary?breedPrimary=${generalInfo.userPetBreed}`)
    .then(res => setMyDatabase(res.data))
    .catch(err => console.log(err))
  }

  function genderFilter(e){
    e.preventDefault()
    axios.get(`http://localhost:3500/PetDataPage/search/sex?sex=${generalInfo.userPetGender}`)
    .then(res => setMyDatabase(res.data))
    .catch(err => console.log(err))
  }
  console.log(generalInfo.userPetGender)
  console.log(myDatabase,"test")
  

  function getFavorites(){
    axios.get("http://localhost:3500/FavoritePage")
    .then(res => setFavoriteList(res.data))
    .catch(err => console.log(err))
  }

  function addFavoritesDb(newPost){
    axios.post("http://localhost:3500/FavoritePage", newPost)
    .then(res => {
      setFavoriteList(prevFav => [...prevFav, res.data.data])
    })
    .catch(err =>console.log(err))
  }

  function deleteFavoritesDb (favoriteId) {
    axios.delete(`http://localhost:3500/FavoritePage/${favoriteId}`)
    .then(res => {
      setFavoriteList(prevFav => prevFav.filter(favorite => favorite._id !== favoriteId))
      .catch(err =>console.log(err))
    })
  }

  useEffect(() =>{
    getDataBaseData()
     getFavorites()
  },[])
 

  return (
    
    <DataContext.Provider 
    value = {{generalInfo, petData, favoriteList, setGeneralInfo, handleChange, handleSubmit,
      inputData,filteredData,addFavoritesDb, deleteFavoritesDb, breedFilter, genderFilter,myDatabase,
      setMyDatabase
    }}>
          {props.children}
    </DataContext.Provider>
  )
}


