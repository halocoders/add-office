const mongoose = require('mongoose')

const OfficeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        locationLat: { type: Number, required: true },
        locationLong: { type: String, required: true },
        officeStart: { type: String, required: true },
        company: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Office", OfficeSchema)