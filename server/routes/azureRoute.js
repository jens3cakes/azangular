const express = require('express');
const router = express.Router();

const Shell = require('node-powershell')
const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

const fs = require('fs');


router.get('/accounts', (req, res) => {
  console.log('ps account')
  ps.addCommand('az account list');
  ps.invoke()
    .then(response => {
      fs.writeFile(`./src/app/pages/listAccounts/accountlist_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
        console.log('file saved')
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    });
});


router.get('/account', (req, res) => {
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

router.get('/subId', (req, res) => {
  console.log('ps sub id')
  ps.addCommand('az account show --query "[id,name]"');
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    });
});

router.get('/tenId', (req, res) => {
  console.log('ps tenat id')
  ps.addCommand('az account show --query "tenantId"');
  ps.invoke()
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/grouplist/:subId', (req, res) => {
  console.log('g list by sub id', req.params.subId)
  ps.addCommand(`az group list --subscription ${req.params.subId}`);
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.send(err)
    });
});

router.get('/groups', (req, res) => {
  console.log('ps group')
  ps.addCommand('az group list');
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
      console.log('azroute', typeof (JSON.parse(response)))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/user', (req, res) => {
  console.log('ps users')
  ps.addCommand(`az role assignment list`);
  ps.invoke()
    .then(response => {
      console.log('hell')
      res.json(JSON.parse(response))
    })
    .catch((err) => {
      res.json(err)
    })
});

router.get('/sql/:id', (req, res) => {
  console.log('ps sql', req.params.id)
  ps.addCommand(`az sql server list --subscription ${req.params.id}`);
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
    })
    .catch((err) => {
      res.json(err)
    })
});

router.get('/sqlDb/:group/:servename', (req, res) => {
  console.log('ps db', req.params.group, req.params.servename)
  ps.addCommand(`az sql db list -g ${req.params.group} -s ${req.params.servename}`)
  ps.invoke()
    .then((response) => {
      res.json(JSON.parse(response))
    })
    .catch((err) => {
      res.json(err)
    })
});

router.get('/allVms', (req, res)=>{
  console.log('ps vm')
  ps.addCommand(`az vm list`);
  ps.invoke()
  .then(response =>{
    res.json(JSON.parse(response))
  })
  .catch((err)=>{
    res.json(err)
  })
})

router.get('/all_vnets', (req, res)=>{
  console.log('ps vnet')
  ps.addCommand(`az network vnet list`);
  ps.invoke()
  .then((response)=>{
    res.json(JSON.parse(response))
  })
  .catch((err)=> {
    res.json(err)
  })
});

router.get('/webApp', (req, res)=>{
  console.log('ps webapp')
  ps.addCommand('az webapp list');
  ps.invoke()
  .then((response)=>{
    res.json(JSON.parse(response))
  })
  .catch((err)=>{
    res.json(err)
  })
});

module.exports = router;