module.exports = function(app){

		const application = require('./routes/application');
		const users = require('./routes/users');
		const trips = require('./routes/trips');
		const pricing = require('./routes/pricing');
		const fullcalendar = require('./routes/fullcalendar');

		app.use('/', application);
		app.use('/users', users);
		app.use('/trips', trips);
		app.use('/pricing', pricing);
		app.use('/fullcalendar', fullcalendar);
    //other routes..
}