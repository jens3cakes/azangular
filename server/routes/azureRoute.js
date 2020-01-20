const express = require('express');
const router = express.Router();

const Shell = require('node-powershell')
const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
})

const fs = require('fs');


router.get('/accounts', (req, res) => {
  ps.addCommand('az account list');
  ps.invoke()
    .then(response => {
      fs.writeFile(`./src/app/pages/listAccounts/accountlist_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});


router.get('/account', (req, res) => {
  ps.addCommand('az account show');
  ps.invoke()
    .then(response => {
      fs.writeFile(`./account_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/subId', (req, res) => {
  ps.addCommand('az account show --query "[id,name]"');
  ps.invoke()
    .then(response => {
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/tenId', (req, res) => {
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
  ps.addCommand(`az group list --subscription ${req.params.subId}`);
  ps.invoke()
    .then(response => {
      fs.writeFile(`./groupListBySubId_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/groups', (req, res) => {
  ps.addCommand('az group list');
  ps.invoke()
    .then(response => {
      fs.writeFile(`./groups_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/user', (req, res) => {
  ps.addCommand(`az role assignment list`);
  ps.invoke()
    .then(response => {
      fs.writeFile(`./usersList_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/sql/:id', (req, res) => {
  ps.addCommand(`az sql server list --subscription ${req.params.id}`);
  ps.invoke()
    .then(response => {
      fs.writeFile(`./sqlServerList_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/sqlDb/:group/:servename', (req, res) => {
  ps.addCommand(`az sql db list -g ${req.params.group} -s ${req.params.servename}`)
  ps.invoke()
    .then((response) => {
      fs.writeFile(`./sqlDatabaseList_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/allVms', (req, res) => {
  ps.addCommand(`az vm list`);
  ps.invoke()
    .then(response => {
      fs.writeFile(`./virtualMachineList_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/all_vnets', (req, res) => {
  ps.addCommand(`az network vnet list`);
  ps.invoke()
    .then((response) => {
      // fs.writeFile(`./virtualNetworkList_${Date.now()}.txt`, response, (err) => {
      //   if (err) throw err;
      // })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/webApp', (req, res) => {
  ps.addCommand('az webapp list');
  ps.invoke()
    .then((response) => {
      fs.writeFile(`./webAppList_${Date.now()}.txt`, response, (err) => {
        if(err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/adAppListAll', (req, res) => {
  ps.addCommand('az ad app list --all');
  ps.invoke()
    .then((response) => {
      fs.writeFile(`./adAppListAll_${Date.now()}.txt`, response, (err) => {
        if (err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/adGroupList', (req, res) => {
  ps.addCommand('az ad group list');
  ps.invoke()
    .then((response) => {
      fs.writeFile(`./adGroupList_${Date.now()}.txt`, response, (err) => {
        if(err) throw err;
      })
      res.json(JSON.parse(response))
    })
    .catch(err => {
      res.json(err)
    })
});

router.get('/keyvaultList', (req, res)=>{
  ps.addCommand(`az keyvault list`);
  ps.invoke()
  .then((response)=>{
    fs.writeFile(`./keyvaultList_${Date.now().txt}`, response, (err)={if(err) {throw err}})
    res.json(JSON.parse(response))
  })
  .catch((err)=>{
    res.json(err)
  })
})

module.exports = router;