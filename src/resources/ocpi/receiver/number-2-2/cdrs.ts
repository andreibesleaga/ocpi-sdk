// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as LocationsAPI from './locations';
import * as TariffsAPI from './tariffs';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Cdrs extends APIResource {
  create(params: CdrCreateParams, options?: RequestOptions): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.post('/ocpi/receiver/2.2/cdrs', {
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

  retrieve(cdrID: string, params: CdrRetrieveParams, options?: RequestOptions): APIPromise<Response> {
    const {
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.get(path`/ocpi/receiver/2.2/cdrs/${cdrID}`, {
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

export interface CdrToken {
  contract_id: string;

  type: 'AD_HOC_USER' | 'APP_USER' | 'OTHER' | 'RFID';

  uid: string;
}

export interface ChargingPeriod {
  dimensions: Array<ChargingPeriod.Dimension>;

  start_date_time: string;

  tariff_id?: string;
}

export namespace ChargingPeriod {
  export interface Dimension {
    type:
      | 'CURRENT'
      | 'ENERGY'
      | 'ENERGY_EXPORT'
      | 'ENERGY_IMPORT'
      | 'MAX_CURRENT'
      | 'MIN_CURRENT'
      | 'MAX_POWER'
      | 'MIN_POWER'
      | 'PARKING_TIME'
      | 'POWER'
      | 'RESERVATION_TIME'
      | 'STATE_OF_CHARGE'
      | 'TIME';

    volume: number;
  }
}

export interface Price {
  excl_vat: number;

  incl_vat: number;
}

export interface CdrCreateParams {
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
  cdr_location: CdrCreateParams.CdrLocation;

  /**
   * Body param:
   */
  cdr_token: CdrToken;

  /**
   * Body param:
   */
  charging_periods: Array<ChargingPeriod>;

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
  end_date_time: string;

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
  start_date_time: string;

  /**
   * Body param:
   */
  total_cost: Price;

  /**
   * Body param:
   */
  total_energy: number;

  /**
   * Body param:
   */
  total_time: number;

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
  credit?: boolean;

  /**
   * Body param:
   */
  credit_reference_id?: string;

  /**
   * Body param:
   */
  invoice_reference_id?: string;

  /**
   * Body param:
   */
  meter_id?: string;

  /**
   * Body param:
   */
  remark?: string;

  /**
   * Body param:
   */
  session_id?: string;

  /**
   * Body param:
   */
  signed_data?: CdrCreateParams.SignedData;

  /**
   * Body param:
   */
  tariffs?: Array<TariffsAPI.Tariff>;

  /**
   * Body param:
   */
  total_energy_cost?: Price;

  /**
   * Body param:
   */
  total_fixed_cost?: Price;

  /**
   * Body param:
   */
  total_parking_cost?: Price;

  /**
   * Body param:
   */
  total_parking_time?: number;

  /**
   * Body param:
   */
  total_reservation_cost?: Price;

  /**
   * Body param:
   */
  total_time_cost?: Price;
}

export namespace CdrCreateParams {
  export interface CdrLocation {
    id: string;

    address: string;

    city: string;

    connector_format: 'SOCKET' | 'CABLE';

    connector_id: string;

    connector_power_type: 'AC_1_PHASE' | 'AC_3_PHASE' | 'DC';

    connector_standard:
      | 'CHADEMO'
      | 'DOMESTIC_A'
      | 'DOMESTIC_B'
      | 'DOMESTIC_C'
      | 'DOMESTIC_D'
      | 'DOMESTIC_E'
      | 'DOMESTIC_F'
      | 'DOMESTIC_G'
      | 'DOMESTIC_H'
      | 'DOMESTIC_I'
      | 'DOMESTIC_J'
      | 'DOMESTIC_K'
      | 'DOMESTIC_L'
      | 'IEC_60309_2_single_16'
      | 'IEC_60309_2_three_16'
      | 'IEC_60309_2_three_32'
      | 'IEC_60309_2_three_64'
      | 'IEC_62196_T1'
      | 'IEC_62196_T1_COMBO'
      | 'IEC_62196_T2'
      | 'IEC_62196_T2_COMBO'
      | 'IEC_62196_T3A'
      | 'IEC_62196_T3C'
      | 'PANTOGRAPH_BOTTOM_UP'
      | 'PANTOGRAPH_TOP_DOWN'
      | 'TESLA_R'
      | 'TESLA_S';

    coordinates: LocationsAPI.GeoLocation;

    country: string;

    evse_id: string;

    evse_uid: string;

    postal_code: string;

    name?: string;
  }

  export interface SignedData {
    encoding_method: string;

    signed_values: Array<SignedData.SignedValue>;

    url: string;

    encoding_method_version?: number;

    public_key?: string;
  }

  export namespace SignedData {
    export interface SignedValue {
      nature: string;

      plain_data: string;

      signed_data: string;
    }
  }
}

export interface CdrRetrieveParams {
  'OCPI-from-country-code': string;

  'OCPI-from-party-id': string;

  'OCPI-to-country-code': string;

  'OCPI-to-party-id': string;

  'X-Correlation-ID': string;

  'X-Request-ID': string;
}

export declare namespace Cdrs {
  export {
    type CdrToken as CdrToken,
    type ChargingPeriod as ChargingPeriod,
    type Price as Price,
    type CdrCreateParams as CdrCreateParams,
    type CdrRetrieveParams as CdrRetrieveParams,
  };
}
