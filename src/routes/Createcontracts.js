const express=require("express");
const app=express();
const contracts=require("./models/contract.js");
const date = require("Date")
const router = new express.Router();

router.post("/", async function(req,res){
    const name= req.body.name;
    const rules=req.body.rules;
    

    const cont= new contracts({
        name:name,
        rules:rules,
        createdDate:Date.now(),  
    })

    await cont.save();
    res.status(200).json({
        "msg":cont,
        "msg2":"Your contract is cretaed successfully..."
})
})
module.exports = router;
// app.post("/", async function(req,res){
//     const name= req.body.name;
//     const rules=req.body.rules;
//     const createdDate=req.body.createdDate;
//     const updatedAt=req.body.updatedAt;
// const cont= new contract({
//     name:name,
//     rules:rules,
//     createdDate:createdDate,
//     updatedAt:updatedAt
// })

//     await cont.save();
//     res.send("Your contract is cretaed successfully...")
// })