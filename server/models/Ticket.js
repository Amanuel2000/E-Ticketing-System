const mongoose = require("mongoose")
 
const TicketSchema = new mongoose.Schema(
    {
       ticketName: { type: String, required: true, },
       ticketPrice: {type: String, required: true,  },
       noOfTickets: { type: String, required: true,   },
       ticketType: { type: String, required: true },
       ticketNumber: { type: String, required: true },
         
    }, { timestamps: true }

)

module.exports = mongoose.model("Ticket", TicketSchema)