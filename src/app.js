const express = require('express');
const router = require('./routers/export-router');
const mongo = require("mongodb");
const mongoose = require("mongoose");

require('dotenv').config(); //env reader

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
  
  console.log(
            `
           State of connection - ${mongoose.connection.readyState} 
           0 = disconnected
           1 = connected
           2 = connecting 
           3 = disconnecting
        `
          );



const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use('/users', router.userRouter)
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log('server on port ' + port)
})