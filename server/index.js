const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev')
const TestDB = require('./test-db')
const rentalRoutes = require('./routes/rentals')

// Seeding the Mongo database with test data from test-db.js
mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const testDb = new TestDB;
    testDb.seedDb();
})

const app = express();
app.use('/api/v1/rentals', rentalRoutes);


const PORT = process.env.PORT || 3001;



app.listen(PORT, function(){
    console.log('Service Started...');
});