exports.usingExtendPage = (req, res) => {
  console.log(Date.now().getDay + ' From render route' );
  res.render(
              'usingextend',
              { 'variableValue': 'some value coming from server side',
                'img_value':  'superimage.jpg',
                'title': 'SNT'
              });
}


exports.GetFirstVenue = getFirstVenueAction;

function getFirstVenueAction(req, res)  {
  res.render(
              'Venue',
              { 'VenueName': `Venue name is xxx ${req.params.id} xxx`
              });
}