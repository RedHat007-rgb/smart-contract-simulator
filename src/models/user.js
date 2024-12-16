const mongoose=require("mongoose");

const schema=mongoose.schema;

const users= new schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        require:true
    }
})

module.export=mongoose.model("users",users)
