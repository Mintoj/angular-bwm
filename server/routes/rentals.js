const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(reg, res){
   Rental.find({}, function(err, foundRentals) {
        res.json(foundRentals);
   });
});

router.get('/:rentalId', function(req, res){
    const id = req.params.rentalId;
    Rental.findById(id, function(err, foundRental){
        if(err){
            res.status(422).send({errors: [{title: 'Rental Error', detail: "Rental not found for id: " + id }]});
        }

        res.json(foundRental);
    });
});

module.exports = router;