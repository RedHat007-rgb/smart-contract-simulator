const mongoose = require("mongoose");

const schema= mongoose.Schema;

const contractSchema = new schema({
    name:{
        type:String,
        require:true
    },
    rules:{
        type:Array,
        require:true,
    },
    createdate:{
        type:String
    },
    updatedAt:{
        type:String

    },
})

module.exports = mongoose.model("contracts",contractSchema);