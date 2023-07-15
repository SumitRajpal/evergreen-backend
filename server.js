const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
var compression = require('compression')
const sequelize = require('./utils/database')
var cors = require('cors');
const { Association } = require('./models/associations');
const app = express();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '2.0.0',
  },
  basePath: './',
    schemes: ['http', 'https'],
  servers:[
    { url: 'http://localhost:3000',
    description: 'Development server',
  }
  ]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/swagger-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
 app.use(bodyParser.json());
app.use(require('./routes/index'))

sequelize.sync({alter:true}).then((results) => {
  console.log(results)
}).catch(error => {
  console.log(error)
})
app.listen(process.env.PORT || 3000);