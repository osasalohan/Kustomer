require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const errorHandler = require('./handlers/error');
const projectsRoutes = require('./routes/projects');
const getPortfolio = require('./helpers/projects');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const profilePicsRoutes = require('./routes/profilePics');
const projectPicsRoutes = require('./routes/projectPics');


app.use(bodyParser.json());

app.use('/api/:id/profilepic', profilePicsRoutes);
app.use('/api/:id/projectpics/:project_id', projectPicsRoutes);
app.use('/api/auth', authRoutes);
app.use(
	'/api/professionals/:id/portfolio',
	loginRequired,
	ensureCorrectUser,
	projectsRoutes
);

app.get('/api/portfolio/:id', getPortfolio);

app.use(function(req, res, next){
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function(){
	console.log(`Server listening on port ${process.env.PORT}`)
});