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

router.route('/drones/:id/edit')
.get((req, res, next) => {
  const id = req.params.id;

  Drone.findById(id)
  .then((drone)=>{
    console.log(`Loaded the following drone: ${drone}`)
    res.render('drones/update-form', drone)
  })
})
.post((req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new: true})
  .then(res.redirect('/drones'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Drone.findByIdAndDelete(id)
  .then(res.redirect('/drones'))
});

module.exports = router;
