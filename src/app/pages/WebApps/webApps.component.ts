import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './webApps.component.html',
  styleUrls: ['./webApps.component.scss']
})

export class WebAppsComponent implements OnInit {

  ngOnInit() {
    this.backend.webAppInfo()
      .then((resp: {
        'appServicePlanId': string,
        'availabilityState': string,
        'clientAffinityEnabled': boolean,
        'clientCertEnabled': string,
        'clientCertExclusionPaths': string,
        'cloningInfo': string,
        'containerSize': number,
        'dailyMemoryTimeQuota': number,
        'defaultHostName': string,
        'enabled': boolean,
        'enabledHostNames': [],
        'geoDistributions': string,
        'hostNamesSslStates': [{
          'hostType': string,
          'ipBasedSslState': string,
          'name': string,
          'sslState': string,
          'toUpdate': string,
          'toUpdateIpBasedSsl': string,
          'virtualIp': string
        },
          {
            'hostType': string,
            'ipBasedSslResult': string,
            'ipBasedSslState': string,
            'name': string,
            'sslState': string,
            'thumbprint': string,
            'toUpdate': string,
            'toUpdateIpBasedSsl': string,
            'virtualIp': string
          }
        ],
        'hostNames': [],
        'hostNamesDisabled': boolean,
        'hostingEnvironmentProfile': string,
        'httpsOnly': boolean,
        'hyperV': boolean,
        'id': string,
        'identity': string,
        'inProgressOperationId': string,
        'isDefaultContainer': string,
        'isXenon': boolean,
        'kind': string,
        'lastModifiedTimeUtc': string,
        'location': string,
        'maxNumberOfWorkers': string,
        'name': string,
        'outboundIpAddresses': string,
        'possibleOutboundIpAddresses': string,
        'redundancyMode': string,
        'repositorySiteName': string,
        'reserved': boolean,
        'resourceGroup': boolean,
        'scmSiteAlsoStopped': boolean,
        'siteConfig': string,
        'slotSwapStatus': string,
        'stated': string,
        'suspendTill': string,
        'tags': {
          'App': string
        },
        'targetSwapSlot': string,
        'trafficManagerHostNames': string,
        'type': string,
        'usageState': string
      }[]) => {
        this.webAppsInfo = resp

        console.log(Object.keys(this.webAppsInfo))
        return this.webAppsInfo
      })

  }

  title: string = 'Web App Info';
  show: boolean;
  btn: number = 0
  activate: Object[]

  webAppsInfo:
    {
      'appServicePlanId': string,
      'availabilityState': string,
      'clientAffinityEnabled': boolean,
      'clientCertEnabled': string,
      'clientCertExclusionPaths': string,
      'cloningInfo': string,
      'containerSize': number,
      'dailyMemoryTimeQuota': number,
      'defaultHostName': string,
      'enabled': boolean,
      'enabledHostNames': [],
      'geoDistributions': string,
      'hostNamesSslStates': [{
        'hostType': string,
        'ipBasedSslState': string,
        'name': string,
        'sslState': string,
        'toUpdate': string,
        'toUpdateIpBasedSsl': string,
        'virtualIp': string
      },
        {
          'hostType': string,
          'ipBasedSslResult': string,
          'ipBasedSslState': string,
          'name': string,
          'sslState': string,
          'thumbprint': string,
          'toUpdate': string,
          'toUpdateIpBasedSsl': string,
          'virtualIp': string
        }
      ],
      'hostNames': [],
      'hostNamesDisabled': boolean,
      'hostingEnvironmentProfile': string,
      'httpsOnly': boolean,
      'hyperV': boolean,
      'id': string,
      'identity': string,
      'inProgressOperationId': string,
      'isDefaultContainer': string,
      'isXenon': boolean,
      'kind': string,
      'lastModifiedTimeUtc': string,
      'location': string,
      'maxNumberOfWorkers': string,
      'name': string,
      'outboundIpAddresses': string,
      'possibleOutboundIpAddresses': string,
      'redundancyMode': string,
      'repositorySiteName': string,
      'reserved': boolean,
      'resourceGroup': boolean,
      'scmSiteAlsoStopped': boolean,
      'siteConfig': string,
      'slotSwapStatus': string,
      'stated': string,
      'suspendTill': string,
      'tags': {
        'App': string
      },
      'targetSwapSlot': string,
      'trafficManagerHostNames': string,
      'type': string,
      'usageState': string
    }[]

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }




}
