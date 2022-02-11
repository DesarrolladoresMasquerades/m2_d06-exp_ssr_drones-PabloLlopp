const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drones)=>{
    console.log(`Drones are displayed in the list`)
    res.render('drones/list', {drones})
  })
  .catch(error=>`Error while loading drones: ${error}`)
});

router.route('/drones/create')
.get((req, res, next) => {
  res.render('drones/create-form')
})
.post((req, res, next) => {
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  Drone.create({name, propellers, maxSpeed})
  .then(()=>{res.redirect('/drones')})
  .catch((error)=>{
    console.log(`Error while loading drones: ${error}`);
    res.redirect('/drones/create')
  }    
  )
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
