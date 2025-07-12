// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CdrsAPI from './cdrs';
import { CdrListParams, CdrRetrieveParams, Cdrs } from './cdrs';
import * as LocationsAPI from './locations';
import {
  LocationListParams,
  LocationRetrieveEvseParams,
  LocationRetrievePageParams,
  LocationRetrieveParams,
  Locations,
} from './locations';
import * as SessionsAPI from './sessions';
import {
  SessionListParams,
  SessionRetrieveParams,
  SessionUpdateChargingPreferencesParams,
  Sessions,
} from './sessions';
import * as TariffsAPI from './tariffs';
import { TariffListParams, TariffRetrieveParams, Tariffs } from './tariffs';
import * as TokensAPI from './tokens';
import { TokenAuthorizeParams, TokenListParams, TokenRetrieveParams, Tokens } from './tokens';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Number2_2 extends APIResource {
  cdrs: CdrsAPI.Cdrs = new CdrsAPI.Cdrs(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  tariffs: TariffsAPI.Tariffs = new TariffsAPI.Tariffs(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  update(uid: string, params: Number2_2UpdateParams, options?: RequestOptions): APIPromise<Response> {
    const {
      command,
      'OCPI-from-country-code': ocpiFromCountryCode,
      'OCPI-from-party-id': ocpiFromPartyID,
      'OCPI-to-country-code': ocpiToCountryCode,
      'OCPI-to-party-id': ocpiToPartyID,
      'X-Correlation-ID': xCorrelationID,
      'X-Request-ID': xRequestID,
      ...body
    } = params;
    return this._client.post(path`/ocpi/sender/2.2/commands/${command}/${uid}`, {
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

export interface DisplayText {
  language: string;

  text: string;
}

export interface Number2_2UpdateParams {
  /**
   * Path param:
   */
  command: 'CANCEL_RESERVATION' | 'RESERVE_NOW' | 'START_SESSION' | 'STOP_SESSION' | 'UNLOCK_CONNECTOR';

  /**
   * Body param:
   */
  result:
    | 'ACCEPTED'
    | 'CANCELED_RESERVATION'
    | 'EVSE_OCCUPIED'
    | 'EVSE_INOPERATIVE'
    | 'FAILED'
    | 'NOT_SUPPORTED'
    | 'REJECTED'
    | 'TIMEOUT'
    | 'UNKNOWN_RESERVATION';

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
  message?: DisplayText;
}

Number2_2.Cdrs = Cdrs;
Number2_2.Locations = Locations;
Number2_2.Sessions = Sessions;
Number2_2.Tariffs = Tariffs;
Number2_2.Tokens = Tokens;

export declare namespace Number2_2 {
  export { type DisplayText as DisplayText, type Number2_2UpdateParams as Number2_2UpdateParams };

  export { Cdrs as Cdrs, type CdrRetrieveParams as CdrRetrieveParams, type CdrListParams as CdrListParams };

  export {
    Locations as Locations,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationListParams as LocationListParams,
    type LocationRetrieveEvseParams as LocationRetrieveEvseParams,
    type LocationRetrievePageParams as LocationRetrievePageParams,
  };

  export {
    Sessions as Sessions,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionListParams as SessionListParams,
    type SessionUpdateChargingPreferencesParams as SessionUpdateChargingPreferencesParams,
  };

  export {
    Tariffs as Tariffs,
    type TariffRetrieveParams as TariffRetrieveParams,
    type TariffListParams as TariffListParams,
  };

  export {
    Tokens as Tokens,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenListParams as TokenListParams,
    type TokenAuthorizeParams as TokenAuthorizeParams,
  };
}
