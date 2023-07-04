const mongoose = require("mongoose")
 
const GenTicketSchema = new mongoose.Schema(
    {
      confirmationNo: { type: String, required: true, },
        userId: {type: String, required: true,  },
        fixtureId: { type: String, required: true,   },
        ticketId: { type: String, required: true },
        QRCode: { type: String, required: true },
         
    }, { timestamps: true }

)

module.exports = mongoose.model("GenTicket", GenTicketSchema)