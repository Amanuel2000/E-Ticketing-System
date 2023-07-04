const mongoose = require("mongoose")
 
const FixtureSchema = new mongoose.Schema(
    {
        fixtureName: { type: String, required: true, },
        fixtureLocation: {type: String, required: true,  },       
        fixtureType: { type: String, required: true },
        categories:{type: Array},
        fixtureDate: { type: String, required: true },
        fixtureTime: {type: String, required: true},
         img: { type: String, required: true,   },
         
    }, { timestamps: true }

)

module.exports = mongoose.model("Fixture", FixtureSchema)