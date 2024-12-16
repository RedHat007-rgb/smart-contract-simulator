const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const URL=process.env.mongodbURL;
console.log(URL)

async function connection(){
    const con=await mongoose.connect(URL);
    console.log("Your'e connected to database");
}

connection();


