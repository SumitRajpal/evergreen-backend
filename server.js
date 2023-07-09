const express = require('express');
const bodyParser = require('body-parser');
var compression = require('compression')
const sequelize = require('./utils/database')
var cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.set('trust proxy', true);
app.use(compression());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./routes/index'))

sequelize.authenticate().then(() => {
  console.log("established")
}).catch(error => {
  console.log(error)
})
app.listen(process.env.PORT || 3000);