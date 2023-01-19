const express = require("express")
const router = express.Router()
const db = require("../models")

const { items, Users, user_item } = db

//checks if item in user id matches user id and item id and updated the state of
//liked and or cart, otherwise it creates new entry into that user_id tabel
router.post('/', async (req,res) =>{
    try{
        const founditem = await user_item.findOne({
            where:{ 
                item_id: req.body.item_id,
                user_id: req.body.user_id 
            }
        })

        if(founditem){
            founditem.update({
                liked:req.body.liked,
                cart:req.body.cart
            })
            res.status(200).json({
                message:"that worked"
            })
        }else{

        const newUserItem = await user_item.create({
            user_id: req.body.user_id,
            item_id: req.body.item_id,
            liked:req.body.liked,
            cart:req.body.cart
        })
         res.status(200).json({
            message:"that worked"
        })
        }   
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/', async (req,res)=>{
   try{ 
    const foundItems = await user_item.findAll({
        where:{
            user_id: req.body.user_id 
        }
    })
   res.json(foundItems)
    }catch(err){
        res.status(500).json(err)
    }
})

//if the item 

module.exports = router;