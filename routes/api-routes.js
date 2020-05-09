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


}