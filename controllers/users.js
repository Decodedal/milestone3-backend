const router = require('express').Router()
const db = require("../models")
// const bcrypt = require('bcrypt')

const{ Users } = db 
router.post('/', async (req,res)=>{
    const user = await Users.create(req.body)
    res.json(user)
})

router.get('/', async(req,res)=>{
    const users = await Users.findAll()
    res.json(users)
})

module.exports = router