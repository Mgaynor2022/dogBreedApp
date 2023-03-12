const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(express.json())
app.use(morgan("dev"))

app.use(cors({
  origin: true
}))

mongoose.connect(
  'mongodb+srv://mgaynor228:nByrsNCBfjmcj2gy@petadoption.cj1glkk.mongodb.net/?retryWrites=true&w=majority',
  ()=> console.log("Connected to MongoDB"))

app.use("/FavoritePage", require("./routes/FavoritePage.jsx"))
app.use("/PetDataPage", require("./routes/PetDataPage.jsx"))

app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg:err.message})
})

app.listen(3500, () => {
    console.log("Pet Adoption Server Is Running On Port 3500")
})

