const router=require('express').Router();
const verifyJWT=require('../verify');

router.get('/',verifyJWT,(req,res)=>{
    res.send(`hi ${req.user.id}`);
})




module.exports=router;