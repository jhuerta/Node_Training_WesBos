exports.usingExtendPage = (req, res) => {
	//throw new Error('something went horrible wrong')
  console.log(Date.now().getDay + ' From render route' );
  res.render(
              'usingextend',
              { 'variableValue': 'some value coming from server side',
                'img_value':  'superimage.jpg',
                'title': 'SNT'
              });
}

function displayVenueName(req, res) {
	const venueName = `Venue name is xxx ${req.VenueName} xxx`;
  	res.render(
    	'Venue',
        {
        	'VenueName': venueName
        });
}

function getVenueName(req, res,next) {
	console.log(__dirname);
	res.cookie('mysupercookie','super cookie value is here', {maxAge: 900000000});
	console.log('My console log');
	req.VenueName = req.params.id + ' -- DIRNAME -->>>>' + __dirname;
	next();
}

function formatVenueName(req, res,next) {
	req.VenueName = 'prettified --' + req.VenueName + '-- prettified';
	next();
}

exports.DisplayVenueName = displayVenueName;
exports.GetVenueName = getVenueName;
exports.FormatVenueName = formatVenueName;