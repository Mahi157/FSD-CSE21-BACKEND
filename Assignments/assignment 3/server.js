const express = require('express');
const profile = require('./data');
const renderPortfolio = require('./template');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(renderPortfolio(profile));
});

app.get('/api/profile', (req, res) => {
    res.json(profile);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
