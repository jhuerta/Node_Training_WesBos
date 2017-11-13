const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const helloWorld = 'Hello World!';
  console.log(helloWorld);
  const juan = {name: 'Juan',age: 35};
  res.send(helloWorld);
});

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

router.get('/usingextend', (req, res) => {
  console.log(Date.now().getDay + ' From render route' );
  res.render(
              'usingextend',
              { 'variableValue': 'some value coming from server side',
                'img_value':  'superimage.jpg'});
});

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

module.exports = router;
