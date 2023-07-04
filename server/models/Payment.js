const mongoose = require("mongoose")
 
const PaymentSchema = new mongoose.Schema(
    {
       paymentType: { type: String, required: true, },
       paymentOrderNo: {type: String, required: true,  },
         
         
    }, { timestamps: true }

)

module.exports = mongoose.model("Payment", PaymentSchema)