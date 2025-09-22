// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CdrsAPI from './cdrs';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Sessions extends APIResource {
  retrieve(sessionID: string, params: SessionRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.get(path`/ocpi/receiver/2.2/sessions/${countryCode}/${partyID}/${sessionID}`, {
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

  update(sessionID: string, params: SessionUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.put(path`/ocpi/receiver/2.2/sessions/${countryCode}/${partyID}/${sessionID}`, {
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

export interface SessionRetrieveParams {
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
}

export interface SessionUpdateParams {
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
  id: string;

  /**
   * Body param:
   */
  auth_method: 'AUTH_REQUEST' | 'COMMAND' | 'WHITELIST';

  /**
   * Body param:
   */
  cdr_token: CdrsAPI.CdrToken;

  /**
   * Body param:
   */
  connector_id: string;

  /**
   * Body param:
   */
  country_code: string;

  /**
   * Body param:
   */
  currency: string;

  /**
   * Body param:
   */
  evse_uid: string;

  /**
   * Body param:
   */
  kwh: number;

  /**
   * Body param:
   */
  last_updated: string;

  /**
   * Body param:
   */
  location_id: string;

  /**
   * Body param:
   */
  party_id: string;

  /**
   * Body param:
   */
  start_date_time: string;

  /**
   * Body param:
   */
  status: 'ACTIVE' | 'COMPLETED' | 'INVALID' | 'PENDING' | 'RESERVATION';

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
   * Body param:
   */
  authorization_reference?: string;

  /**
   * Body param:
   */
  charging_periods?: Array<CdrsAPI.ChargingPeriod>;

  /**
   * Body param:
   */
  end_date_time?: string;

  /**
   * Body param:
   */
  meter_id?: string;

  /**
   * Body param:
   */
  total_cost?: CdrsAPI.Price;
}

export declare namespace Sessions {
  export {
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionUpdateParams as SessionUpdateParams,
  };
}
