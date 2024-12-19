const express=require("express");
const app=express();
const bodyparser=require("body-parser")
const contracts=require("./contracts/creation.js")

app.use(bodyparser.text());
app.use(express.json());
app.use("/",contracts);





app.listen(3000,()=>{
    console.log("Smart-Contract-Simulator");
    console.log("***************************");
    console.log("Server is listening to port: 3000.......")
})