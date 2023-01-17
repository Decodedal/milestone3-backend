const router = require('express').Router()
const db = require("../models")
const bcrypt = require("bcrypt")

const { Users } = db

router.post('/', async ( req,res) => {
    let user = await Users.findOne({
        where:{ email: req.body.email }
    })
    
    if(!user || !await bcrypt.compare(req.body.password, user.password_digest)){
        res.status(404).json({
            message: 'Could not find user with the provided username and password'
        })
    }else{
        res.json({ user })
    }
})

module.exports = router