const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

// const bodyParser = require('body-parser');
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
  origin: true
}))
//Deploying App
app.use(express.static(path.join(__dirname, "client", "dist")));

//Routes
app.use("/api/dogBreed", require("./routes/dogBreedPage.jsx"))
app.use("/api/dogData", require("./routes/dogsDataPage.jsx"))



app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg:err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });

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
