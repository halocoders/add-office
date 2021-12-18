const Office = require('../models/Office')
const router = require('express').Router()

// CREATE
router.post('/', async (req, res) => {
    const newOffice = new Office(req.body);

    try {
        const savedOffice = await newOffice.save();
        res.status(200).json(savedOffice);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Office.findByIdAndDelete(req.params.id);
        res.status(200).json('Office has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL OFFICE BY Company
router.get('/', async (req, res) => {
    const qCompany = req.query.company;
    try {
        let offices;

        if (qCompany) {
            offices = await Office.find({
                company: { $in: [qCompany] }, // temukan Office yang ada di dlm categories dengan nilai yang sama dari qCompany
            }).sort({ createdAt: -1 });
        } else {
            offices = await Office.find();
        }

        res.status(200).json(offices);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE ALL OFFICE BY COMPANY
router.delete('/find/:company', async (req, res) => {
    try {
        await Office.findOneAndDelete({ company: req.params.company });
        res.status(200).json("All office has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;