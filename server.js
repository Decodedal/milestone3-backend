const express = require('express');
const methodOverride = require("method-override");
const { Sequelize } = require('sequelize');
const cors = require('cors')

//CONFIGURATION
require('dotenv').config()
const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//ROOT
 app.get('/', (req,res)=>{
    res.status(200).send("Shop till you drop 🛒")
 })

 //Listen
 app.listen(process.env.PORT, () =>{
    console.log('style-centeral backend live on port ' + process.env.PORT )
 })