const express = require('express');
const router = express.Router();
const {FuelStation} = require('../../models')

// const fuelController = require('../../controllers/fuelController');
// const isAuthenticated = require('../../middlewares/authMiddleware')

router.get('/locations', async (req,res) =>{
    console.log("Recieved GET request for station locations")
    try{
        const stationData = await FuelStation.findAll()
        if (stationData){
            console.log("Station data retrieved")
        }
        res.status(200).json(stationData);
    }catch(err) {
        res.status(500).json(err)
    }
})

// Define fuel-related routes
// router.get('/prices', fuelController.showFuelPrices);

module.exports = router;
