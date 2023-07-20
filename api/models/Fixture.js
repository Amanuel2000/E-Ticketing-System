const mongoose = require("mongoose")

const FixtureSchema = new mongoose.Schema(
    {
        fixtureName: { type: String, required: true },
        fixtureType: { type: String, required: true },
        fixtureLocation: { type: String, required: true }, 
        fixtureDate: { type: String, required: true },
        fixtureTime: {type: String, required: true},
       
    },
    { timestamps: true }
);
 

const fixtureModel = mongoose.model("fixtures", FixtureSchema)
module.exports = fixtureModel