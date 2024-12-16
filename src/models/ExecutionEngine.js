const mongoose=require("mongoose");

const schema=mongoose.Schema;

const Executionengine=new schema({
    contractId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    state:{
        type:Object
    },
    transcationHistory:{
        type:Array
    }
})

module.export= mongoose.model("Execuition",Executionengine);