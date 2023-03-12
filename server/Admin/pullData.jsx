
// import axios from "axios"



  
//   const animalSearch =
//    [
//       "cats","dogs",
//       "rabbits","hamsters",
//       "snakes","fish",
//       "ferrets","iguanas",
//       "lizards","turtles",
//   ]

//   const apiData = petData.map(data =>{
//       return {
//         animal:[i],
//         name:data.attributes.name,
//         sex:data.attributes.sex,
//         birthDate:data.attributes.birthDate,
//         ageString:data.attributes.ageString,
//         adoptionFee:data.attributes.adoptionFee,
//         searchString:data.attributes.searchString,
//         rescueId:data.attributes.rescueId,
//         breedPrimary:data.attributes.breedPrimary,
//         summary:data.attributes.summary,
//         url:data.attributes.url,
//         colorDetails:data.attributes.colorDetails,
//         descriptionText:data.attributes.descriptionText,
//         pictureThumbnailUrl:data.attributes.pictureThumbnailUrl,
//         obedienceTraining:data.attributes.obedienceTraining,
//         newPeopleReaction:data.attributes.newPeopleReaction
//       }
//     }
//   )
  
//       for (let i = 0; i < animalSearch.length - 1; i++){
//           const userSearch = {
//               method: 'get',
//               url: `https://api.rescuegroups.org/v5/public/animals/search/available/${[i]}/?limit=2&page=1&include=pictures&`,
//               headers: { 
//                 'Content-Type': 'application/vnd.api+json', 
//                 'Authorization': 'pB7YZnmH'
//               }
//             };
//             axios(userSearch)
//             .then(res => setPetData(res.data.data))
//             .catch(err => console.log(err))

//            axios.post("http://localhost:3500/PetDataPage",postData)
//           .then(console.log("Data Has Been Posted"))
//           .catch(err => console.log(err))
//       }

   
    


