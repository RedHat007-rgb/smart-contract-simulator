const mongoose= require("mongoose");
const schema = mongoose.Schema;
const transaction=new schema({
    contractId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    amount:{
        type:Number,
        requie:true
    },
    sender:{
        type:String,
        require:true
    },

    receiver:{
        type:String,
        require:true
    },
    statue:{
        type:String,
        require:true
    },
    fee:{
        type:Number,
        require:true
    },
    timestamp:{
        type:Date
    }
})


module.exports=mongoose.model("transcations",transaction);

