// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SenderChargingprofilesAPI from '../sender/chargingprofiles';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Chargingprofiles extends APIResource {
  retrieve(
    sessionID: string,
    params: ChargingprofileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...query
    } = params;
    return this._client.get(path`/ocpi/2.2/receiver/chargingprofiles/${sessionID}`, {
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
    return this._client.put(path`/ocpi/2.2/receiver/chargingprofiles/${sessionID}`, {
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

  delete(
    sessionID: string,
    params: ChargingprofileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      response_url,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.delete(path`/ocpi/2.2/receiver/chargingprofiles/${sessionID}`, {
      query: { response_url },
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

export interface ChargingprofileRetrieveParams {
  /**
   * Query param:
   */
  duration: number;

  /**
   * Query param:
   */
  response_url: string;

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

export interface ChargingprofileUpdateParams {
  /**
   * Body param:
   */
  charging_profile: SenderChargingprofilesAPI.ChargingProfile;

  /**
   * Body param:
   */
  response_url: string;

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

export interface ChargingprofileDeleteParams {
  /**
   * Query param:
   */
  response_url: string;

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

export declare namespace Chargingprofiles {
  export {
    type ChargingprofileRetrieveParams as ChargingprofileRetrieveParams,
    type ChargingprofileUpdateParams as ChargingprofileUpdateParams,
    type ChargingprofileDeleteParams as ChargingprofileDeleteParams,
  };
}
