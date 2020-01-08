import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { Time } from '@angular/common';

@Component({
  templateUrl: './allVms.component.html',
  styleUrls: ['./allVms.component.scss']
})

export class AllVmsComponent implements OnInit {


  ngOnInit() {
    console.log('vm onint fired')
    this.backend.showVmList()
      .then((resp: {
        'additionalCapabilities': boolean,
        'availabilitySet': boolean,
        'billingProfile': boolean,
        'diagnosticsProfile': { 'bootDiagnostics': { 'enabled': boolean, 'storageUri': string } },
        'hardwareProfile': { 'vmSize': string },
        'host': boolean,
        'id': string,
        'identity': boolean,
        'instanceView': boolean,
        'licenseType': string,
        'location': string,
        'name': string,
        'networkProfile': { 'networkInterfaces': [{ 'id': string, 'primary': boolean, 'resourceGroup': string, }] },
        'osProfile': {
          'adminPassword': boolean,
          'adminUsername': string,
          'allowExtensionOperations': boolean,
          'computerName': string,
          'customData': boolean,
          'linuxConfiguration': boolean,
          'requireGuestProvisionSignal': boolean,
          'secrets': [],
          'windowsConfiguration': {
            'additionalUnattendContentent': number,
            'enableAutomaticUpdates': boolean,
            'provisionVmAgent': boolean,
            'timezone': Time,
            'winRm': boolean
          }
        },
        'plan': number,
        'priority': number,
        'provisioningState': string,
        'proximityPlacementGroup': number,
        'resourceGroup': string,
        'resources': [{
          'autoUpgradeMinorVersion': number,
          'forceUpdateTag': number,
          'id': string,
          'instanceView': number,
          'location': string,
          'name': string,
          'protectedSettings': string,
          'provisioningState': string,
          'publisher': string,
          'resourceGroup': string,
          'settings': string,
          'tags': string,
          'type': string,
          'typeHandlerVersion': string,
          'virtualMachineExtensionType': string,
        }],
        'storageProfile': {
          'dataDisks': [],
          'imageReference': {
            'exactVersion': string,
            'id': string,
            'offer': string,
            'publisher': string,
            'sku': string,
            'version': string,
          },
          'osDisk': {
            'caching': string,
            'createOption': string,
            'diffDiskSettings': string,
            'diskSizeGb': string,
            'encryptionSettings': string,
            'image': string,
            'managedDisk': {
              'diskEncryptionSet': string,
              'id': string,
              'resourceGroup': string,
              'storageAccountType': string,
            },
            'name': string,
            'osType': string,
            'vhd': string,
            'writeAcceleratorEnabled': string,
          }
        },
        'tags': {
          'Host': string
        },
        'type': string,
        'virtualMachineScaleSet': string,
        'vmId': string,
        'zones': string

      }) => {
        this.vms = resp
        return this.vms
      })

  }

  title: string = "Virtual Machines"
  vms: {
    'additionalCapabilities': boolean,
    'availabilitySet': boolean,
    'billingProfile': boolean,
    'diagnosticsProfile': { 'bootDiagnostics': { 'enabled': boolean, 'storageUri': string } },
    'hardwareProfile': { 'vmSize': string },
    'host': boolean,
    'id': string,
    'identity': boolean,
    'instanceView': boolean,
    'licenseType': string,
    'location': string,
    'name': string,
    'networkProfile': { 'networkInterfaces': [{ 'id': string, 'primary': boolean, 'resourceGroup': string, }] },
    'osProfile': {
      'adminPassword': boolean,
      'adminUsername': string,
      'allowExtensionOperations': boolean,
      'computerName': string,
      'customData': boolean,
      'linuxConfiguration': boolean,
      'requireGuestProvisionSignal': boolean,
      'secrets': [],
      'windowsConfiguration': {
        'additionalUnattendContentent': number,
        'enableAutomaticUpdates': boolean,
        'provisionVmAgent': boolean,
        'timezone': Time,
        'winRm': boolean
      }
    },
    'plan': number,
    'priority': number,
    'provisioningState': string,
    'proximityPlacementGroup': number,
    'resourceGroup': string,
    'resources': [{
      'autoUpgradeMinorVersion': number,
      'forceUpdateTag': number,
      'id': string,
      'instanceView': number,
      'location': string,
      'name': string,
      'protectedSettings': string,
      'provisioningState': string,
      'publisher': string,
      'resourceGroup': string,
      'settings': string,
      'tags': string,
      'type': string,
      'typeHandlerVersion': string,
      'virtualMachineExtensionType': string,
    }],
    'storageProfile': {
      'dataDisks': [],
      'imageReference': {
        'exactVersion': string,
        'id': string,
        'offer': string,
        'publisher': string,
        'sku': string,
        'version': string,
      },
      'osDisk': {
        'caching': string,
        'createOption': string,
        'diffDiskSettings': string,
        'diskSizeGb': string,
        'encryptionSettings': string,
        'image': string,
        'managedDisk': {
          'diskEncryptionSet': string,
          'id': string,
          'resourceGroup': string,
          'storageAccountType': string,
        },
        'name': string,
        'osType': string,
        'vhd': string,
        'writeAcceleratorEnabled': string,
      }
    },
    'tags': {
      'Host': string
    },
    'type': string,
    'virtualMachineScaleSet': string,
    'vmId': string,
    'zones': string
  }

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  }
}