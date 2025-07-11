// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Sessions extends APIResource {
  retrieve(uid: string, params: SessionRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.get(path`/ocpi/sender/2.2/sessions/page/${uid}`, {
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

  list(params: SessionListParams, options?: RequestOptions): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...query
    } = params;
    return this._client.get('/ocpi/sender/2.2/sessions', {
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

  updateChargingPreferences(
    sessionID: string,
    params: SessionUpdateChargingPreferencesParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.put(path`/ocpi/sender/2.2/sessions/${sessionID}/charging_preferences`, {
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
  'OCPI-from-country-code': string;

  'OCPI-from-party-id': string;

  'OCPI-to-country-code': string;

  'OCPI-to-party-id': string;

  'X-Correlation-ID': string;

  'X-Request-ID': string;
}

export interface SessionListParams {
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
  date_from?: string;

  /**
   * Query param:
   */
  date_to?: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  offset?: number;
}

export interface SessionUpdateChargingPreferencesParams {
  /**
   * Body param:
   */
  profile_type: 'CHEAP' | 'FAST' | 'GREEN' | 'REGULAR';

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
  departure_time?: string;

  /**
   * Body param:
   */
  discharge_allowed?: boolean;

  /**
   * Body param:
   */
  energy_need?: number;
}

export declare namespace Sessions {
  export {
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionUpdateChargingPreferencesParams as SessionUpdateChargingPreferencesParams,
  };
}
