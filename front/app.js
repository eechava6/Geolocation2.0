// filename: app.js
const app = require('express')();
app.get('/health-check', (req, res) => res.sendStatus(200));
app.listen(8080);
