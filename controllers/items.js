const express = require("express")
const router = express.Router()
const db = require("../models")

const { items } = db

router.get('/', async (req,res)=>{
    const item = await items.findAll()
    res.json(item)
})

module.exports = router;