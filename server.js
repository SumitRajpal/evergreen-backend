const express = require('express');
const hpp = require('hpp');
const  helmet  = require("helmet");
const rateLimit = require('express-rate-limit')
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
app.use(function (error,req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET');
  next(error);
});

app.options('*', cors())
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json());
 app.use(helmet());
 app.disable('x-powered-by');
 app.use(hpp());
 const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	max: 2000, 
	standardHeaders: true,
	legacyHeaders: false, 
})
app.use(limiter)
app.use(require('./routes/index'))
const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  }).end();
}
app.use(ErrorHandler)
sequelize.sync({alter :true}).then((results) => {
  console.log(results)
}).catch(error => {
  console.log(error)
})
app.listen(process.env.PORT || 3000);