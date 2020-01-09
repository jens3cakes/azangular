import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './all_vnet.component.html',
  styleUrls: ['./all_vnet.component.scss']
})

export class AllVnetComponent implements OnInit {

  ngOnInit() {
this.backend.showVnetList()
.then((resp: {
  'addressSpace': {
    'addressPrefixes': []
  },
  'bgpCommunities': string,
  'ddosProtectionPlan': string,
  'dhcpOptions': {
    'dnsServers': []
  },
  'enableDdosProtection': boolean,
  'enableVmProtection': boolean,
  'etag': string,
  'id': string,
  'location': string,
  'name': string,
  'provisioningState': string,
  'resourceGroup': string,
  'resourceGuid': string,
  'subnets': [{
    'addressPrefix': string,
    'addressPrefixes': string,
    'delegations': [],
    'etag': string,
    'id': string,
    'ipConfigurationProfiles': string,
    'ipConfigurations': [{
      'etag': string,
      'id': string,
      'name': string,
      'privateIpAddress': string,
      'privateIpAllocationMethod': string,
      'provisioningState': string,
      'publicIpAddress': string,
      'resourceGroup': string,
      'subnet': string
    }],
    'name': string,
    'natGateway': string,
    'networkSecurityGroup': string,
    'privateEndpointNetworkPolicies': string,
    'provisioningState': string,
    'purpose': string,
    'resourceGroup': string,
    'resourceNavigationLinks': string,
    'routeTable': string,
    'serviceAssociationLinks': string,
    'serviceEndpointPolicies': string,
    'serviceEndpoints': [],
    'type': string
  }],
  'tags': string,
  'type': string,
  'virtualNetworkPeerings':[]
})=>{
  this.vnets = resp
  return this.vnets
});
  };

  title: string = 'Virtual Networks'

  vnets: {
    'addressSpace': {
      'addressPrefixes': []
    },
    'bgpCommunities': string,
    'ddosProtectionPlan': string,
    'dhcpOptions': {
      'dnsServers': []
    },
    'enableDdosProtection': boolean,
    'enableVmProtection': boolean,
    'etag': string,
    'id': string,
    'location': string,
    'name': string,
    'provisioningState': string,
    'resourceGroup': string,
    'resourceGuid': string,
    'subnets': [{
      'addressPrefix': string,
      'addressPrefixes': string,
      'delegations': [],
      'etag': string,
      'id': string,
      'ipConfigurationProfiles': string,
      'ipConfigurations': [{
        'etag': string,
        'id': string,
        'name': string,
        'privateIpAddress': string,
        'privateIpAllocationMethod': string,
        'provisioningState': string,
        'publicIpAddress': string,
        'resourceGroup': string,
        'subnet': string
      }],
      'name': string,
      'natGateway': string,
      'networkSecurityGroup': string,
      'privateEndpointNetworkPolicies': string,
      'provisioningState': string,
      'purpose': string,
      'resourceGroup': string,
      'resourceNavigationLinks': string,
      'routeTable': string,
      'serviceAssociationLinks': string,
      'serviceEndpointPolicies': string,
      'serviceEndpoints': [],
      'type': string
    }],
    'tags': string,
    'type': string,
    'virtualNetworkPeerings':[]
  };

  constructor(
    private backend: BackendService,
    private router: Router
  ) {

  };
};