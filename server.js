const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
// const fetch = require('node-fetch');

app.use(express.json())
app.use(morgan("dev"))

app.use(cors({
  origin: true
}))

// app.use(cors());
// const corsOptions = {
//     origin: "http://localhost:3500"
// };

// const requestEndpoint = "https://api.api-ninjas.com/v1/dogs?name=bulldog";

// app.get('/getData', cors(corsOptions), async (req, res) => {
//     const fetchOptions = {
//         method: 'GET'
//     }
//     const response = await fetch(requestEndpoint, fetchOptions);
//     const jsonResponse = await response.json();
//     res.json(jsonResponse);
// });




// app.use("/favorites", require("./routes/FavoritePage.jsx"))
app.use("/api/dogBreed", require("./routes/dogBreedPage.jsx"))
app.use("/api/dogData", require("./routes/dogsDataPage.jsx"))
// app.use("/PetDataPage", require("./routes/PetDataPage.jsx"))


app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg:err.message})
})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(3500, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('Server is Successfully Running, and App is listening on port ' + 3500);
        });
    })
    .catch(err => {
        console.error(err);
    });
