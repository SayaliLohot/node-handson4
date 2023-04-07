const express = require('express')
const route = express.Router()
const Bcrypt = require('bcrypt')
const Arr = []

const saltRound =10
route.post("/register", async (req, res)=>{
    const detail = req.body

   const hashpassword= await Bcrypt.hash(detail.password, saltRound)
//    console.log(hashpassword)
//    res.send(hashpassword)

const obj ={

    email:detail.email,
    password:hashpassword
}
   Arr.push(obj)
   res.send(Arr)

})


route.post("/login",async (req, res)=>{

    Arr.forEach( async(data)=>{
        if(req.body.email === data.email){
            const validate = await Bcrypt.compare(req.body.password , data.password)
            if(validate){
                res.send({msg:"success login"})
            }
            else{
                res.send({msg:"wrong password "})
            }
        }
    })
    
})


module.exports = route