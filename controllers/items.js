const express = require("express")
const router = express.Router()
const db = require("../models")

const { items, Users, user_item } = db

//checks if item in user id matches user id and item id and updated the state of
//liked and or cart, otherwise it creates new entry into that user_id tabel
router.post('/:likeOrCart', async (req,res) =>{
    try{
        const founditem = await user_item.findOne({
            where:{ 
                item_id: req.body.item_id,
                user_id: req.body.user_id 
            }
        })

        if(founditem){
            if(req.params.likeOrCart === "like"){
                founditem.update({
                    liked:req.body.liked
                })
                res.status(200).json({
                    message:"that worked"
                })
            }else if(req.params.likeOrCart === "cart"){
                founditem.update({
                    cart:req.body.cart,
                    quantity:req.body.quantity
                })
                res.status(200).json({
                    message:"that worked"
                })
            }
        }else{

        const newUserItem = await user_item.create({
            user_id: req.body.user_id,
            item_id: req.body.item_id,
            liked:req.body.liked,
            cart:req.body.cart,
            quantity:req.body.quantity
        })
         res.status(200).json({
            message:"that worked"
        })
        }   
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req,res)=>{
   try{ 
    const foundItems = await user_item.findAll({
        where:{
            user_id: req.params.id 
        }
    })
   res.json(foundItems)
    }catch(err){
        res.status(500).json(err)
    }
})

//this route is called when user logs out to prevent old items from reapearing in the cart if they have since been removed
router.post("/deleter/:id", (req, res)=>{
try{ 
    user_item.update({cart:false, quantity:0},{
        where:{
            user_id: req.params.id
        }
    })
         res.status(200).json({
             message:"that worked"
         })
}catch(err){
    res.status(500).json(err)
}
})

module.exports = router;