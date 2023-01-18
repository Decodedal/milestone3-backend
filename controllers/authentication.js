const router = require('express').Router()
const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("json-web-token")

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
        const result = await jwt.encode(process.env.JWT_SECRET, {id:user.user_id})
        res.json({ user:user, token:result.value })
    }
})


router.get('/profile', async (req, res) => {
    try {
        //split authorizaation header into ["Bearer","Token"]
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer'){
            //DECODE THE JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            //Get logged in user id from payload
            const { id } = result.value

            //find the user object that matches the id

            let user = await Users.findOne({
                where:{
                    user_id: id
                }
            })
        res.json(user)
    }
    } catch {
        res.json(null)
    }
})


module.exports = router