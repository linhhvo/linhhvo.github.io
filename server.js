const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/database');
const path = require('path');

// Get global env variable
dotenv.config({path: './config/config.env'});

// Connect database
connectDB();

// Set up routes
const projects = require('./routes/projects');

const app = express();

app.use(express.json());

app.use('/api/projects', projects);

// Set up build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname = 'client/build/index.html'));
    });
} else if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || '8080';

app.listen(PORT, '::');