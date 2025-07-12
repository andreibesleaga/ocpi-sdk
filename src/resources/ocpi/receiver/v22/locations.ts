// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V22API from '../../sender/v22/v22';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Locations extends APIResource {
  retrieve(
    connectorID: string,
    params: LocationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      evseUID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.get(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUID}/${connectorID}`,
      {
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
      },
    );
  }

  update(connectorID: string, params: LocationUpdateParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      evseUID,
      body,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.patch(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUID}/${connectorID}`,
      {
        body: body,
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
      },
    );
  }

  modify(locationID: string, params: LocationModifyParams, options?: RequestOptions): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      body,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.patch(path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}`, {
      body: body,
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

  modifyEvse(
    evseUid: string,
    params: LocationModifyEvseParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      body,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.patch(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUid}`,
      {
        body: body,
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
      },
    );
  }

  retrieveEvse(
    evseUid: string,
    params: LocationRetrieveEvseParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
    } = params;
    return this._client.get(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUid}`,
      {
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
      },
    );
  }

  updateConnector(
    connectorID: string,
    params: LocationUpdateConnectorParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      evseUID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.put(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUID}/${connectorID}`,
      {
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
      },
    );
  }

  updateEvse(
    evseUid: string,
    params: LocationUpdateEvseParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const {
      countryCode,
      partyID,
      locationID,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.put(
      path`/ocpi/receiver/2.2/locations/${countryCode}/${partyID}/${locationID}/${evseUid}`,
      {
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
      },
    );
  }
}

export interface BusinessDetails {
  name: string;

  logo?: Image;

  website?: string;
}

export interface Connector {
  id: string;

  format: 'SOCKET' | 'CABLE';

  last_updated: string;

  max_voltage: number;

  power_type: 'AC_1_PHASE' | 'AC_3_PHASE' | 'DC';

  standard:
    | 'CHADEMO'
    | 'CHAOJI'
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
    | 'GBT_AC'
    | 'GBT_DC'
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
    | 'NEMA_5_20'
    | 'NEMA_6_30'
    | 'NEMA_6_50'
    | 'NEMA_10_30'
    | 'NEMA_10_50'
    | 'NEMA_14_30'
    | 'NEMA_14_50'
    | 'PANTOGRAPH_BOTTOM_UP'
    | 'PANTOGRAPH_TOP_DOWN'
    | 'TESLA_R'
    | 'TESLA_S'
    | 'UNKNOWN';

  /**
   * Maximum amperage of the connector, in ampere [A].
   *
   * OCM allows null here due to operators commonly leaving it blank
   */
  max_amperage?: number | null;

  max_electric_power?: number;

  tariff_ids?: Array<string>;

  terms_and_conditions?: string;
}

export interface EnergyMix {
  is_green_energy: boolean;

  energy_product_name?: string;

  energy_sources?: Array<EnergySource>;

  environ_impact?: Array<EnvironmentalImpact>;

  supplier_name?: string;
}

export interface EnergySource {
  percentage: number;

  source: 'NUCLEAR' | 'GENERAL_FOSSIL' | 'COAL' | 'GAS' | 'GENERAL_GREEN' | 'SOLAR' | 'WIND' | 'WATER';
}

export interface EnvironmentalImpact {
  amount: number;

  category: 'NUCLEAR_WASTE' | 'CARBON_DIOXIDE';
}

export interface Evse {
  connectors: Array<Connector>;

  last_updated: string;

  status:
    | 'AVAILABLE'
    | 'BLOCKED'
    | 'CHARGING'
    | 'INOPERATIVE'
    | 'OUTOFORDER'
    | 'PLANNED'
    | 'REMOVED'
    | 'RESERVED'
    | 'UNKNOWN';

  /**
   * Uniquely identifies the EVSE within the CPOs platform (and suboperator
   * platforms).
   */
  uid: string;

  capabilities?: Array<
    | 'CHARGING_PROFILE_CAPABLE'
    | 'CHARGING_PREFERENCES_CAPABLE'
    | 'CHIP_CARD_SUPPORT'
    | 'CONTACTLESS_CARD_SUPPORT'
    | 'CREDIT_CARD_PAYABLE'
    | 'DEBIT_CARD_PAYABLE'
    | 'PED_TERMINAL'
    | 'REMOTE_START_STOP_CAPABLE'
    | 'RESERVABLE'
    | 'RFID_READER'
    | 'START_SESSION_CONNECTOR_REQUIRED'
    | 'TOKEN_GROUP_CAPABLE'
    | 'UNLOCK_CAPABLE'
  >;

  coordinates?: GeoLocation;

  directions?: Array<V22API.DisplayText>;

  evse_id?: string | null;

  floor_level?: string;

  images?: Array<Image>;

  parking_restrictions?: Array<'EV_ONLY' | 'PLUGGED' | 'DISABLED' | 'CUSTOMERS' | 'MOTORCYCLES'>;

  physical_reference?: string;

  status_schedule?: Array<Evse.StatusSchedule>;
}

export namespace Evse {
  export interface StatusSchedule {
    period_begin: string;

    status:
      | 'AVAILABLE'
      | 'BLOCKED'
      | 'CHARGING'
      | 'INOPERATIVE'
      | 'OUTOFORDER'
      | 'PLANNED'
      | 'REMOVED'
      | 'RESERVED'
      | 'UNKNOWN';

    period_end?: string;
  }
}

export interface ExceptionalPeriod {
  period_begin: string;

  period_end: string;
}

export interface GeoLocation {
  latitude: string;

  longitude: string;
}

export interface Image {
  category: 'CHARGER' | 'ENTRANCE' | 'LOCATION' | 'NETWORK' | 'OPERATOR' | 'OTHER' | 'OWNER';

  type: string;

  url: string;

  height?: number | null;

  thumbnail?: string | null;

  width?: number | null;
}

export interface LocationRetrieveParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

  /**
   * Path param:
   */
  evseUID: string;

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

export interface LocationUpdateParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

  /**
   * Path param:
   */
  evseUID: string;

  /**
   * Body param:
   */
  body: { [key: string]: unknown };

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

export interface LocationModifyParams {
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
  body: { [key: string]: unknown };

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

export interface LocationModifyEvseParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

  /**
   * Body param:
   */
  body: { [key: string]: unknown };

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

export interface LocationRetrieveEvseParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

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

export interface LocationUpdateConnectorParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

  /**
   * Path param:
   */
  evseUID: string;

  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  format: 'SOCKET' | 'CABLE';

  /**
   * Body param:
   */
  last_updated: string;

  /**
   * Body param:
   */
  max_voltage: number;

  /**
   * Body param:
   */
  power_type: 'AC_1_PHASE' | 'AC_3_PHASE' | 'DC';

  /**
   * Body param:
   */
  standard:
    | 'CHADEMO'
    | 'CHAOJI'
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
    | 'GBT_AC'
    | 'GBT_DC'
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
    | 'NEMA_5_20'
    | 'NEMA_6_30'
    | 'NEMA_6_50'
    | 'NEMA_10_30'
    | 'NEMA_10_50'
    | 'NEMA_14_30'
    | 'NEMA_14_50'
    | 'PANTOGRAPH_BOTTOM_UP'
    | 'PANTOGRAPH_TOP_DOWN'
    | 'TESLA_R'
    | 'TESLA_S'
    | 'UNKNOWN';

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
   * Body param: Maximum amperage of the connector, in ampere [A].
   *
   * OCM allows null here due to operators commonly leaving it blank
   */
  max_amperage?: number | null;

  /**
   * Body param:
   */
  max_electric_power?: number;

  /**
   * Body param:
   */
  tariff_ids?: Array<string>;

  /**
   * Body param:
   */
  terms_and_conditions?: string;
}

export interface LocationUpdateEvseParams {
  /**
   * Path param:
   */
  countryCode: string;

  /**
   * Path param:
   */
  partyID: string;

  /**
   * Path param:
   */
  locationID: string;

  /**
   * Body param:
   */
  connectors: Array<Connector>;

  /**
   * Body param:
   */
  last_updated: string;

  /**
   * Body param:
   */
  status:
    | 'AVAILABLE'
    | 'BLOCKED'
    | 'CHARGING'
    | 'INOPERATIVE'
    | 'OUTOFORDER'
    | 'PLANNED'
    | 'REMOVED'
    | 'RESERVED'
    | 'UNKNOWN';

  /**
   * Body param: Uniquely identifies the EVSE within the CPOs platform (and
   * suboperator platforms).
   */
  uid: string;

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
  capabilities?: Array<
    | 'CHARGING_PROFILE_CAPABLE'
    | 'CHARGING_PREFERENCES_CAPABLE'
    | 'CHIP_CARD_SUPPORT'
    | 'CONTACTLESS_CARD_SUPPORT'
    | 'CREDIT_CARD_PAYABLE'
    | 'DEBIT_CARD_PAYABLE'
    | 'PED_TERMINAL'
    | 'REMOTE_START_STOP_CAPABLE'
    | 'RESERVABLE'
    | 'RFID_READER'
    | 'START_SESSION_CONNECTOR_REQUIRED'
    | 'TOKEN_GROUP_CAPABLE'
    | 'UNLOCK_CAPABLE'
  >;

  /**
   * Body param:
   */
  coordinates?: GeoLocation;

  /**
   * Body param:
   */
  directions?: Array<V22API.DisplayText>;

  /**
   * Body param:
   */
  evse_id?: string | null;

  /**
   * Body param:
   */
  floor_level?: string;

  /**
   * Body param:
   */
  images?: Array<Image>;

  /**
   * Body param:
   */
  parking_restrictions?: Array<'EV_ONLY' | 'PLUGGED' | 'DISABLED' | 'CUSTOMERS' | 'MOTORCYCLES'>;

  /**
   * Body param:
   */
  physical_reference?: string;

  /**
   * Body param:
   */
  status_schedule?: Array<LocationUpdateEvseParams.StatusSchedule>;
}

export namespace LocationUpdateEvseParams {
  export interface StatusSchedule {
    period_begin: string;

    status:
      | 'AVAILABLE'
      | 'BLOCKED'
      | 'CHARGING'
      | 'INOPERATIVE'
      | 'OUTOFORDER'
      | 'PLANNED'
      | 'REMOVED'
      | 'RESERVED'
      | 'UNKNOWN';

    period_end?: string;
  }
}

export declare namespace Locations {
  export {
    type BusinessDetails as BusinessDetails,
    type Connector as Connector,
    type EnergyMix as EnergyMix,
    type EnergySource as EnergySource,
    type EnvironmentalImpact as EnvironmentalImpact,
    type Evse as Evse,
    type ExceptionalPeriod as ExceptionalPeriod,
    type GeoLocation as GeoLocation,
    type Image as Image,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationModifyParams as LocationModifyParams,
    type LocationModifyEvseParams as LocationModifyEvseParams,
    type LocationRetrieveEvseParams as LocationRetrieveEvseParams,
    type LocationUpdateConnectorParams as LocationUpdateConnectorParams,
    type LocationUpdateEvseParams as LocationUpdateEvseParams,
  };
}
