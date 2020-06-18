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
// const imageRoutes = require('./routes/images');


app.use(bodyParser.json());

// app.use('/images', imageRoutes);
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