// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CdrsAPI from './cdrs';
import * as LocationsAPI from './locations';
import * as V22API from '../../sender/v22/v22';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tariffs extends APIResource {
  retrieve(tariffID: string, params: TariffRetrieveParams, options?: RequestOptions): APIPromise<Response> {
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
    return this._client.get(path`/ocpi/receiver/2.2/tariffs/${countryCode}/${partyID}/${tariffID}`, {
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

  update(tariffID: string, params: TariffUpdateParams, options?: RequestOptions): APIPromise<Response> {
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
    return this._client.put(path`/ocpi/receiver/2.2/tariffs/${countryCode}/${partyID}/${tariffID}`, {
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

  delete(tariffID: string, params: TariffDeleteParams, options?: RequestOptions): APIPromise<Response> {
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
    return this._client.delete(path`/ocpi/receiver/2.2/tariffs/${countryCode}/${partyID}/${tariffID}`, {
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

export interface Tariff {
  id: string;

  country_code: string;

  currency: string;

  elements: Array<Tariff.Element>;

  last_updated: string;

  party_id: string;

  end_date_time?: string;

  energy_mix?: LocationsAPI.EnergyMix;

  max_price?: CdrsAPI.Price;

  min_price?: CdrsAPI.Price;

  start_date_time?: string;

  tariff_alt_text?: Array<V22API.DisplayText>;

  tariff_alt_url?: string;

  type?: 'AD_HOC_PAYMENT' | 'PROFILE_CHEAP' | 'PROFILE_FAST' | 'PROFILE_GREEN' | 'REGULAR';
}

export namespace Tariff {
  export interface Element {
    price_components: Array<Element.PriceComponent>;

    restrictions?: Element.Restrictions;
  }

  export namespace Element {
    export interface PriceComponent {
      price: number;

      step_size: number;

      type: 'ENERGY' | 'FLAT' | 'PARKING_TIME' | 'TIME';

      vat?: number;
    }

    export interface Restrictions {
      day_of_week?: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

      end_date?: string;

      end_time?: string;

      max_current?: number;

      max_duration?: number;

      max_kwh?: number;

      max_power?: number;

      min_current?: number;

      min_duration?: number;

      min_kwh?: number;

      min_power?: number;

      reservation?: 'RESERVATION' | 'RESERVATION_EXPIRES';

      start_date?: string;

      start_time?: string;
    }
  }
}

export interface TariffRetrieveParams {
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

export interface TariffUpdateParams {
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
  country_code: string;

  /**
   * Body param:
   */
  currency: string;

  /**
   * Body param:
   */
  elements: Array<TariffUpdateParams.Element>;

  /**
   * Body param:
   */
  last_updated: string;

  /**
   * Body param:
   */
  party_id: string;

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
  end_date_time?: string;

  /**
   * Body param:
   */
  energy_mix?: LocationsAPI.EnergyMix;

  /**
   * Body param:
   */
  max_price?: CdrsAPI.Price;

  /**
   * Body param:
   */
  min_price?: CdrsAPI.Price;

  /**
   * Body param:
   */
  start_date_time?: string;

  /**
   * Body param:
   */
  tariff_alt_text?: Array<V22API.DisplayText>;

  /**
   * Body param:
   */
  tariff_alt_url?: string;

  /**
   * Body param:
   */
  type?: 'AD_HOC_PAYMENT' | 'PROFILE_CHEAP' | 'PROFILE_FAST' | 'PROFILE_GREEN' | 'REGULAR';
}

export namespace TariffUpdateParams {
  export interface Element {
    price_components: Array<Element.PriceComponent>;

    restrictions?: Element.Restrictions;
  }

  export namespace Element {
    export interface PriceComponent {
      price: number;

      step_size: number;

      type: 'ENERGY' | 'FLAT' | 'PARKING_TIME' | 'TIME';

      vat?: number;
    }

    export interface Restrictions {
      day_of_week?: Array<'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'>;

      end_date?: string;

      end_time?: string;

      max_current?: number;

      max_duration?: number;

      max_kwh?: number;

      max_power?: number;

      min_current?: number;

      min_duration?: number;

      min_kwh?: number;

      min_power?: number;

      reservation?: 'RESERVATION' | 'RESERVATION_EXPIRES';

      start_date?: string;

      start_time?: string;
    }
  }
}

export interface TariffDeleteParams {
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

export declare namespace Tariffs {
  export {
    type Tariff as Tariff,
    type TariffRetrieveParams as TariffRetrieveParams,
    type TariffUpdateParams as TariffUpdateParams,
    type TariffDeleteParams as TariffDeleteParams,
  };
}
