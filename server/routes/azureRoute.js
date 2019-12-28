const express = require('express');
const router = express.Router();

const Shell = require('node-powershell')
const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

router.get('/name', (req, res) => {
  console.log('ps')
  ps.addCommand('az group list');
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
      console.log('azroute')
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router;