const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Hello Usama, welcome to jenkins on ec2'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
