// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tokens extends APIResource {
  retrieve(tokenUid: string, params: TokenRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...query
    } = params;
    return this._client.get(path`/ocpi/receiver/2.2/tokens/${countryCode}/${partyID}/${tokenUid}`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          'OCPI-from-country-code': ocpiFromCountryCode,
          'OCPI-from-party-id': ocpiFromPartyID,
          'OCPI-to-country-code': ocpiToCountryCode,
          'OCPI-to-party-id': ocpiToPartyID,
          'X-Correlation-ID': xCorrelationID,
          'X-Request-ID': xRequestID,
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  update(tokenUid: string, params: TokenUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      query_type,
      ...body
    } = params;
    return this._client.put(path`/ocpi/receiver/2.2/tokens/${countryCode}/${partyID}/${tokenUid}`, {
      query: { type: query_type },
      body,
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          'OCPI-from-country-code': ocpiFromCountryCode,
          'OCPI-from-party-id': ocpiFromPartyID,
          'OCPI-to-country-code': ocpiToCountryCode,
          'OCPI-to-party-id': ocpiToPartyID,
          'X-Correlation-ID': xCorrelationID,
          'X-Request-ID': xRequestID,
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }
}

export interface EnergyContract {
  supplier_name: string;

  contract_id?: string;
}

export interface Token {
  contract_id: string;

  country_code: string;

  issuer: string;

  last_updated: string;

  party_id: string;

  type: 'AD_HOC_USER' | 'APP_USER' | 'OTHER' | 'RFID';

  uid: string;

  valid: boolean;

  whitelist: 'ALWAYS' | 'ALLOWED' | 'ALLOWED_OFFLINE' | 'NEVER';

  default_profile_type?: 'CHEAP' | 'FAST' | 'GREEN' | 'REGULAR';

  energy_contract?: EnergyContract;

  group_id?: string;

  language?: string;

  visual_number?: string;
}

export interface TokenRetrieveParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Header param:
   */
  'OCPI-from-country-code': string;

  /**
   * Header param:
   */
  'OCPI-from-party-id': string;

  /**
   * Header param:
   */
  'OCPI-to-country-code': string;

  /**
   * Header param:
   */
  'OCPI-to-party-id': string;

  /**
   * Header param:
   */
  'X-Correlation-ID': string;

  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Query param:
   */
  type?: 'AD_HOC_USER' | 'APP_USER' | 'OTHER' | 'RFID';
}

export interface TokenUpdateParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Body param:
   */
  contract_id: string;

  /**
   * Body param:
   */
  country_code: string;

  /**
   * Body param:
   */
  issuer: string;

  /**
   * Body param:
   */
  last_updated: string;

  /**
   * Body param:
   */
  party_id: string;

  /**
   * Body param:
   */
  body_type: 'AD_HOC_USER' | 'APP_USER' | 'OTHER' | 'RFID';

  /**
   * Body param:
   */
  uid: string;

  /**
   * Body param:
   */
  valid: boolean;

  /**
   * Body param:
   */
  whitelist: 'ALWAYS' | 'ALLOWED' | 'ALLOWED_OFFLINE' | 'NEVER';

  /**
   * Header param:
   */
  'OCPI-from-country-code': string;

  /**
   * Header param:
   */
  'OCPI-from-party-id': string;

  /**
   * Header param:
   */
  'OCPI-to-country-code': string;

  /**
   * Header param:
   */
  'OCPI-to-party-id': string;

  /**
   * Header param:
   */
  'X-Correlation-ID': string;

  /**
   * Header param:
   */
  'X-Request-ID': string;

  /**
   * Query param:
   */
  query_type?: 'AD_HOC_USER' | 'APP_USER' | 'OTHER' | 'RFID';

  /**
   * Body param:
   */
  default_profile_type?: 'CHEAP' | 'FAST' | 'GREEN' | 'REGULAR';

  /**
   * Body param:
   */
  energy_contract?: EnergyContract;

  /**
   * Body param:
   */
  group_id?: string;

  /**
   * Body param:
   */
  language?: string;

  /**
   * Body param:
   */
  visual_number?: string;
}

export declare namespace Tokens {
  export {
    type EnergyContract as EnergyContract,
    type Token as Token,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenUpdateParams as TokenUpdateParams,
  };
}
