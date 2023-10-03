const express = require('express');
const app = express();
const port = 3000;

//serve static files from the public directory
app.use(express.static('public')); 

// Route for Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for About page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// Route for Contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
