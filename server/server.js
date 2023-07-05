const express=require('express')
const RegisterUser=require('./model')
const jwt=require('jsonwebtoken')
const middleware=require('./middleware')
const cors=require('cors')
const app=express() 
const mongoose=require('mongoose')
                  //mongodb+srv://todolist:todo@cluster0.vimtjcm.mongodb.net/UserModule?retryWrites=true&w=majority
                  //mongodb+srv://hemanthb718:hemanth@cluster0.tmpywvk.mongodb.net/Users?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://todolist:todo@cluster0.vimtjcm.mongodb.net/Users?retryWrites=true&w=majority",{
 useUnifiedTopology: true,
 useNewUrlParser: true,
 // useCreateIndex : true
}).then(()=>{
 console.log('mongoDb is connected ')
})

app.use(express.json())
 app.use(cors({origin:"*"}))
// register post data

app.post('/register',async(req,res)=>{
try{
const {username,email,password,confirmpassword}=req.body
let  exist=await RegisterUser.findOne({email:email})
if(exist){
 return res.status(400).send('user already exists')
}
if(password!==confirmpassword){
 return res.status(400).send('passwords are not matching')
}
let newUser= new RegisterUser({
 username,
 email,
 password,
 confirmpassword
})
await newUser.save();
res.status(200).send('user registered successfully')
}
catch(err){
console.log(err)
res.status(500).send('Interval server error')
}
})

// jwt token post

 app.post('/login',async (req,res)=>{
  try{
const {email,password}=req.body;
let exist=await RegisterUser.findOne({email})
if(!exist){
 return res.status(400).send('user not found')
}
if(exist.password!==password){
 return res.status(400).send('Invalid Crendials')
}
let payload={
user:{
  id:exist.id
}
}
jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
 (err,token)=>{
  if(err) throw err
  return res.json({token})
 }
 )
  }
  catch(err){
   console.log(err)
   return res.status(500).send('server error')
  }
 })

//jwt get data
app .get('/myprofile',middleware,async(req,res)=>{
try{
let exist =await RegisterUser.findById(req.user.id)
if(!exist){
 return res.status(400).send('user not found')
}
res.json(exist)
}
catch(err){
console.log(err)
return res.status(500).send('server error')
}
})

app.listen(5000,()=>{
 console.log('server is runnning port number 5000 ')
})