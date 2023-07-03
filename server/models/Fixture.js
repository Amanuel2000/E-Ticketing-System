const mongoose = require("mongoose")
 
const FixtureSchema = new mongoose.Schema(
    {
        matchName: { type: String, required: true, },
        matchLocation: {type: String, required: true,  },
        img: { type: String, required: true,   },
        matchtype: { type: String, required: true },
         
    }, { timestamps: true }

)

module.exports = mongoose.model("Fixture", FixtureSchema)