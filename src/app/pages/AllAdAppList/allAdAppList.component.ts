import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: './allAdAppList.component.html',
  styleUrls: ['./allAdAppList.component.html']
})

export class AllAdAppListComponent implements OnInit {


  ngOnInit() {
    this.backend.adAppListAll()
      .then((resp: {
        'acceptMappedClaims': string,
        'addIns': string,
        'allowGuestSignIn': string,
        'allowPassthroughUsers': string,
        'appId': string,
        'appLogoUrl': string,
        'appPermissions': string,
        'appRoles': [],
        'applicationTemplateId': string,
        'availableToOtherTenants': boolean,
        'deletionTimestamp': string,
        'displayName': string,
        'errorUrl': string,
        'groupMembershipClaims': string,
        'homepage': string,
        'identifierUris': [],
        'informationalUrls': {
          'marketing': string,
          'privacy': string,
          'support': string,
          'termsOfService': string
        },
        'isDeviceOnlyAuthSupported': string,
        'keyCredentials': [],
        'knownClientApplications': [],
        'logo@odata.mediaEditLink': string,
        'logoUrl': string,
        'logoutUrl': string,
        'mainLogo@odata.mediaEditLink': string,
        'oauth2AllowIdTokenImplicitFlow': boolean,
        'oauth2AllowImplicitFlow': boolean,
        'oauth2AllowUrlPathMatching': boolean,
        'oauth2Permissions': [{
          'adminConsentDescription': string,
          'adminConsentDisplayName': string,
          'id': string,
          'isEnabled': string,
          'type': string,
          'userConsentDescription': string,
          'userConsentDisplayName': string,
          'value': string
        }],
        'oauth2RequirePostResponse': boolean,
        'objectId': string,
        'objectType': string,
        'odata.type': string,
        'optionalClaims': string,
        'orgRestrictions': string,
        'parentalControlSettings': {
          'countriesBlockedForMinors': [],
          'legalAgeGroupRule': string
        },
        'passwordCredentials': [{
          'additionalProperties': string,
          'customKeyIdentifier': string,
          'endDate': string,
          'keyId': string,
          'startDate': string,
          'value': string
        }],
        'preAuthorizedApplications': string,
        'publicClient': string,
        'publisherDomain': string,
        'recordConsentConditions': string,
        'replyUrls': [],
        'requiredResourceAccess': [],
        'samlMetadataUrl': string,
        'signInAudience': string,
        'tokenEncryptionKeyId': string,
        'wwwHomepage': string
      }[]) => {
        this.adAppList = resp
        return this.adAppList
      })
  }
  title: string = 'Active Directory App List'
  adAppList: {
    'acceptMappedClaims': string,
    'addIns': string,
    'allowGuestSignIn': string,
    'allowPassthroughUsers': string,
    'appId': string,
    'appLogoUrl': string,
    'appPermissions': string,
    'appRoles': [],
    'applicationTemplateId': string,
    'availableToOtherTenants': boolean,
    'deletionTimestamp': string,
    'displayName': string,
    'errorUrl': string,
    'groupMembershipClaims': string,
    'homepage': string,
    'identifierUris': [],
    'informationalUrls': {
      'marketing': string,
      'privacy': string,
      'support': string,
      'termsOfService': string
    },
    'isDeviceOnlyAuthSupported': string,
    'keyCredentials': [],
    'knownClientApplications': [],
    'logo@odata.mediaEditLink': string,
    'logoUrl': string,
    'logoutUrl': string,
    'mainLogo@odata.mediaEditLink': string,
    'oauth2AllowIdTokenImplicitFlow': boolean,
    'oauth2AllowImplicitFlow': boolean,
    'oauth2AllowUrlPathMatching': boolean,
    'oauth2Permissions': [{
      'adminConsentDescription': string,
      'adminConsentDisplayName': string,
      'id': string,
      'isEnabled': string,
      'type': string,
      'userConsentDescription': string,
      'userConsentDisplayName': string,
      'value': string
    }],
    'oauth2RequirePostResponse': boolean,
    'objectId': string,
    'objectType': string,
    'odata.type': string,
    'optionalClaims': string,
    'orgRestrictions': string,
    'parentalControlSettings': {
      'countriesBlockedForMinors': [],
      'legalAgeGroupRule': string
    },
    'passwordCredentials': [{
      'additionalProperties': string,
      'customKeyIdentifier': string,
      'endDate': string,
      'keyId': string,
      'startDate': string,
      'value': string
    }],
    'preAuthorizedApplications': string,
    'publicClient': string,
    'publisherDomain': string,
    'recordConsentConditions': string,
    'replyUrls': [],
    'requiredResourceAccess': [],
    'samlMetadataUrl': string,
    'signInAudience': string,
    'tokenEncryptionKeyId': string,
    'wwwHomepage': string
  }[]

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }
}
