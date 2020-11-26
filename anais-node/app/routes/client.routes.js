module.exports = app => {
    const client = require("../controllers/client.controller");
  
    var router = require("express").Router();
  
    // Create a new Client
    router.post("/", client.create);
  
    // Retrieve all Client
    router.get("/", client.findAll);
  
    // Retrieve a single Client with id
    router.get("/:id", client.findOne);

  
    // Delete Client with an id
    router.delete("/:id", client.delete);
  
    // Update a Client with id
    router.put("/:id", client.update);
  
  
    app.use('/api/clients', router);
  };