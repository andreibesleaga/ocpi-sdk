// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Chargingprofiles extends APIResource {
  update(
    sessionID: string,
    params: ChargingprofileUpdateParams,
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
    return this._client.put(path`/ocpi/2.2/sender/chargingprofiles/${sessionID}`, {
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

  createResult(
    uid: string,
    params: ChargingprofileCreateResultParams,
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
    return this._client.post(path`/ocpi/2.2/sender/chargingprofiles/result/${uid}`, {
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

export interface ActiveChargingProfile {
  charging_profile: ChargingProfile;

  start_date_time: string;
}

export interface ChargingProfile {
  charging_rate_unit: 'W' | 'A';

  charging_profile_period?: Array<ChargingProfile.ChargingProfilePeriod>;

  duration?: number;

  min_charging_rate?: number;

  start_date_time?: string;
}

export namespace ChargingProfile {
  export interface ChargingProfilePeriod {
    limit: number;

    start_period: number;
  }
}

export interface ChargingprofileUpdateParams {
  /**
   * Body param:
   */
  charging_profile: ChargingProfile;

  /**
   * Body param:
   */
  start_date_time: string;

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

export interface ChargingprofileCreateResultParams {
  /**
   * Body param:
   */
  result: 'ACCEPTED' | 'REJECTED' | 'UNKNOWN';

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
  profile?: ActiveChargingProfile;
}

export declare namespace Chargingprofiles {
  export {
    type ActiveChargingProfile as ActiveChargingProfile,
    type ChargingProfile as ChargingProfile,
    type ChargingprofileUpdateParams as ChargingprofileUpdateParams,
    type ChargingprofileCreateResultParams as ChargingprofileCreateResultParams,
  };
}
