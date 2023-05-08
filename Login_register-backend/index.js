import Express from "express";
import cors from "cors"
import mongoose from "mongoose"

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginRegistration",{

    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{

    console.log("DB connection")
})


 const userSchema = new  mongoose.Schema({
    name:String,
    email:String,
    password:String
 })

const User = new mongoose.model("User",userSchema)
  
//Routes
app.post("/login",(req,res)=>{

    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if (user) {
            if (password === user.password) {
                res.send({messag:"login succesfully",user: user})
            }else{
                res.send({messag:"password does not match"})
            }
        } else {
            res.send({messag:"user not registered"})
        }
    })

})

app.post("/register",(req,res)=>{

   const {name,email,password}=req.body
   User.findOne({email:email},(err,user)=>{
    if (user) {
        res.send({mesage:"allredy register"})
    }else
    {
        const user = new User({
            name,
            email,
            password
           })
           user.save( err =>{
            if (err) {
                res.send(err)
                
            }else{
                res.send({messag:"succesfully registered"})
            }
           })
        
        }
        

    })
})
app.listen(9002,()=>{

    console.log("started at port 9002")
})