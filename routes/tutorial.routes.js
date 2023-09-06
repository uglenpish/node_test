module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  let router = require('express').Router();

  //create a new tutorial
  router.post("/", tutorials.create);

   // Retrieve all Tutorials
   router.get("/", tutorials.findAll);

  app.use('/api/tutorials', router);
}