function getEvent(req, res) {
  const eventId = req.params.id;
	const eventDescription = `This is event id ${eventId}`;
  	res.render(
    	'Event',
        {
        	'Description': eventDescription
        });
}

exports.GetEvent = getEvent;