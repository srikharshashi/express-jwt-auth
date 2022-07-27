const router=require('express').Router();
const User=require('../model/User');


router.post('/register',async (req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    console.log(req.body);
    try {
        const savedUser=await user.save();
        res.send(savedUser);
    } catch (error) {
        console.log(error); 
        res.status(400).send(error.toString());
    }
});


router.post("/login",(req,res)=>{});









module.exports=router;

