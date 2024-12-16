// - `transactionId` (ObjectId): Reference to the associated transaction.
// - `calculatedFee` (Number): The computed gas fee.
// - `timestamp` (Date


const mongoose=require("mongoose");
const schema=mongoose.Schema;

const GasFee=new schema({
    transactionID:{
        type:mongoose.Schema.Types.ObjectID,
    },
    calculatedFee:{
        type:Number,
    },
    timestamp:{
        type:Date().timestamp
    }
})

module.export=mongoose.model("Gasfee",GasFee);