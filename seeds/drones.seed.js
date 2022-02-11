require('../db/index');
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

const droneArmy = [
    {
        name: "Turbokiller",
        propellers: 5,
        maxSpeed: 15
    },
    {
        name: "Kikidronix",
        propellers: 3,
        maxSpeed: 8
    },
    {
        name: "Satana",
        propellers: 4,
        maxSpeed: 20
    }
]

Drone.create(droneArmy)
.then(dronesFromDb => {
  console.log(`Added ${dronesFromDb.length} drones`);
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating drones: ${err}`))