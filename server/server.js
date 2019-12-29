require('dotenv').config();
const http = require('http');

const express = require('express');
const app = express();
const Shell = require('node-powershell')
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const path = require('path');

const azureRoute = require('./routes/azureRoute');

const bodyparser = require('body-parser');
const session = require('express-session');
const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyparser.json());


app.get('/api/login', (req, res) => {
  console.log('server1')
  ps.addCommand('az login');
  ps.invoke()
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.json(err)
    });
});

app.use('/api/azure', azureRoute);


app.get('/smoke', (req, res) => {
  res.send("Here is the fire")

.catch(err => {
  res.json(err)
})
})

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});