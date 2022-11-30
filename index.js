const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Hello usama welcome to jenkinsc,testing'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
