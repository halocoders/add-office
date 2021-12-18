const Company = require('../models/Company')
const router = require('express').Router()


// CREATE
router.post('/', async (req, res) => {
    const newCompany = new Company(req.body);

    try {
        const savedCompany = await newCompany.save();
        res.status(200).json(savedCompany);
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json('Company has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET COMPANY
router.get('/find/:name', async (req, res) => {
    try {
        const company = await Company.findOne({ name: req.params.name });
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL COMPANY
router.get('/', async (req, res) => {
    try {
        let companies = await Company.find().sort({ createdAt: -1 });
        res.status(200).json(companies);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;