const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const companyRouter = require('./routes/company')
const officeRouter = require('./routes/office')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBConnection Success');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/company', companyRouter);
app.use('/api/office', officeRouter);

// ===== Deployment =====
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// ===== Deployment =====

const PORT = process.env.PORT || 5000;

console.log('server started on port', PORT);
app.listen(PORT);
