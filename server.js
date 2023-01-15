const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors')
const bodyParser = require('body-parser')

//CONFIGURATION
require('dotenv').config()
const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

//Postgres Connection string
// const sequelize = new Sequelize(process.env.PG_URI)

// try{
//    sequelize.authenticate()
//    console.log("DB connection established")
// }catch(err){
//    console.log(`no dice ${err}`)
// }

//ROOT
 app.get('/', (req,res)=>{
    res.status(200).send("Shop till you drop 🛒")
 })

 //Listen
 app.listen(process.env.PORT, () =>{
    console.log('style-centeral backend live on port ' + process.env.PORT )
 })