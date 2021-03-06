const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const helloWorld = 'Hello World!';
  console.log(helloWorld);
  const juan = {name: 'Juan',age: 35};
  res.send(helloWorld);
});

const eventController = require('../controllers/eventController');
router.get('/event/:id',
  eventController.GetEvent);

/*--------------------------------- TEST ROUTES ---------------------------------*/

router.get('/cityapi', (req, res) => {
  const bernCity = {city: 'Bern',population: 125000,country: 'Switzerland'};
  res.json(bernCity);
});

router.get('/render', (req, res) => {
  console.log(Date.now().getDay + ' From render route' );
  res.render(
              'helloworld',
              { 'variableValue': 'some value coming from server side',
                'img_value':  'superimage.jpg'});
});

const venueController = require('../controllers/venueController');

router.get('/usingextend', venueController.usingExtendPage);

router.get('/venues/:id',
  venueController.GetVenueName,
  venueController.FormatVenueName,
  venueController.DisplayVenueName);

router.get('/queryandparams/:cityname/:citycountry', (req, res) => {
  var params = req.params;
  var firstQueryStringValue = req.query.first;
  var secondQueryStringValue = req.query.second;
  var newCity = {	NewCityName : 'New ' + params.cityname, 
  					NewCityCountry : 'New ' + params.citycountry, 
  					FirstQueryStringValue: firstQueryStringValue,
  					SecondQueryStringValue: secondQueryStringValue,

  				};
  res.json(newCity);
});

/*--------------------------------- ---------------------------------*/
/*--------------------------------- ---------------------------------*/
/*--------------------------------- ---------------------------------*/
/*--------------------------------- ---------------------------------*/

module.exports = router;