const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        address: { type: String, required: true },
        revenue: { type: Number, required: true },
        phoneNumber: { type: String, required: true },
    },
    { timestamps: true }
)


module.exports = mongoose.model("Company", CompanySchema)