const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

//requiring models to sync
const db = require('./models');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
// app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`App listening on PORT: http://localhost:${PORT}`);
  });
});
