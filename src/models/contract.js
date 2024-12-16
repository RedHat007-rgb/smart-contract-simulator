const mongoose = require("mongoose");

const schema= mongoose.Schema;

const contractSchema = new schema({
    name:{
        type:String,
        require:true
    },
    rules:{
        type:String,
        require:true,
    },
    createdate:{
        type:Date
    },
    updatedAt:{
        type:Date

    },
})

module.export = mongoose.model("contacts",contractSchema);