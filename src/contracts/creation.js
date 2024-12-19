const  fs=require("fs").promises;
const express=require("express");


const app=express();


const ABI=app.post("/",async(req,res)=>{
    const ABI=req.params.ABI;
    const contractABI = require(`/Users/basanireddy/Documents/projects/smart-contract-simulator/build/contracts/${ABI}`).abi;
})

const create=app.post("/create",async (req,res)=>{
        const ABI=req.params.ABI;
      let main_program = req.body;
    console.log(main_program);

    try {
        await fs.writeFile('/Users/basanireddy/Documents/projects/smart-contract-simulator/contracts/contract.sol', main_program);
        const index = contractABI.indexOf("generatedSources"); // Find the index of "banana"
        if (index > -1) {
        contractABI.splice(index, 1); // Remove 1 element at the found index
        }
        
        res.status(200).json({ contractABI });
    } catch (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ msg: "Error saving the contract" });
    }
});

    
module.exports=create