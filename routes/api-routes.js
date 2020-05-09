var db = require("../models");

module.exports = function(app){
  //GET route for all definitions
  app.get("/api/definitions/", function(req, res) {
    db.Definitions.findAll({})
      .then(function(dbDefinitions) {
        res.json(dbDefinitions);
      });
  });

//GET route for all in specific category
  app.get("/api/definitions/category/:category", function(req, res) {
    db.Definitions.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbDefinitions) {
        res.json(dbDefinitions);
      });
  });

  //POST route for creating a new definition
  app.post("/api/definition", function(req, res) {
    console.log(req.body);
    db.Definitions.create({
      title: req.body.title,
      definition: req.body.definition,
      example: req.body.example,
      category: req.body.category
    })
      .then(function(dbDefinitions) {
        res.json(dbDefinitions);
      });
  });
  
// DELETE Route for deleting definitions
  app.delete("/api/definitions/:id", function(req, res) {
    db.Definitions.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbDefinitions) {
        res.json(dbDefinitions);
      });
  });
}