const express = require('express');
const router = express.Router();

const Shell = require('node-powershell')
const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

const fs = require('fs');


router.get('/accounts', (req,res) => {
  console.log('ps account')
  ps.addCommand('az account list');
  ps.invoke()
  .then(response => {
    fs.writeFile('./src/app/pages/listAccounts/accountlist.txt',response, (err)=>{
      if(err) throw err;
      console.log('file saved')
    })
    res.json(JSON.parse(response))
  })
  .catch(err => {
    res.json(err)
  });
});





router.get('/print', (req, res)=>{
  fs.readFile('accountlist.txt', (err, data)=> {
    if(err) throw err;
    let info = JSON.parse(data);
    console.log(info)
  })

})

router.get('/account', (req, res)=> {
  console.log('ps show account')
  ps.addCommand('az account show');
  ps.invoke()
  .then(response => {
  res.json(JSON.parse(response))
  })
  .catch(err => {
   res.json(err)
  });
});

router.get('/subId', (req, res)=> {
  console.log('ps sub id')
  ps.addCommand('az account show --query "[id,name]"');
  ps.invoke()
  .then(response =>{
    res.json(JSON.parse(response))
  })
  .catch(err => {
    res.json(err)
  });
});

router.get('/tenId', (req, res)=> {
  console.log('ps tenat id')
  ps.addCommand('az account show --query "tenantId"');
  ps.invoke()
  .then(response =>{
    res.json(response)
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/grouplist/:subId', (req, res)=> {
  console.log('g list by sub id', req.params.subId)
  ps.addCommand(`az group list --subscription ${req.params.subId}`);
  ps.invoke()
  .then(response => {
    res.json(JSON.parse(response))
  })
  .catch(err=>{
    res.send(err)
  });
});

router.get('/name', (req, res) => {
  console.log('ps group')
  ps.addCommand('az group list');
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
      console.log('azroute')
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/users', (req, res)=>{
  console.log('ps users')
  ps.addCommand('az ad user list');
  ps.invoke()
  .then(response => {
    res.json(JSON.parse(response))
  })
  .catch((err)=>{
    res.json(err)
  })
});



module.exports = router;