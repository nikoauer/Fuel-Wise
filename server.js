const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const fuelRoutes = require('./routes/fuelRoutes');
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Set up view engine (Handlebars)
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.use('/auth', authRoutes);
app.use('/fuel', fuelRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
