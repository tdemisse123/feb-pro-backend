const express = require('express');
const mongoose = require('mongoose')

const mongoDbUri = "mongodb+srv://mongo:Tg232323@cluster0.eslfdlp.mongodb.net/?retryWrites=true&w=majority"

const app = express();

mongoose.connect(mongoDbUri).then(() =>{ 
    console.log("Database connection is successful")
}).catch((err) => {
    console.log(err)
})


app.listen(5000, () =>{
    console.log('our server is up and running on port 5000')
});

