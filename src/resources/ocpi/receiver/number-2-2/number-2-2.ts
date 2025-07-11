// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CdrsAPI from './cdrs';
import { CdrCreateParams, CdrRetrieveParams, CdrToken, Cdrs, ChargingPeriod, Price } from './cdrs';
import * as CommandsAPI from './commands';
import {
  CommandCancelReservationParams,
  CommandReserveNowParams,
  CommandStartSessionParams,
  CommandStopSessionParams,
  CommandUnlockConnectorParams,
  Commands,
} from './commands';
import * as LocationsAPI from './locations';
import {
  BusinessDetails,
  Connector,
  EnergyMix,
  Evse,
  ExceptionalPeriod,
  GeoLocation,
  Image,
  LocationRetrieveParams,
  LocationUpdateParams,
  Locations,
} from './locations';
import * as SessionsAPI from './sessions';
import { SessionRetrieveParams, SessionUpdateParams, Sessions } from './sessions';
import * as TariffsAPI from './tariffs';
import { Tariff, TariffDeleteParams, TariffRetrieveParams, TariffUpdateParams, Tariffs } from './tariffs';
import * as TokensAPI from './tokens';
import { Token, TokenRetrieveParams, TokenUpdateParams, Tokens } from './tokens';

export class Number2_2 extends APIResource {
  cdrs: CdrsAPI.Cdrs = new CdrsAPI.Cdrs(this._client);
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  tariffs: TariffsAPI.Tariffs = new TariffsAPI.Tariffs(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

Number2_2.Cdrs = Cdrs;
Number2_2.Commands = Commands;
Number2_2.Locations = Locations;
Number2_2.Sessions = Sessions;
Number2_2.Tariffs = Tariffs;
Number2_2.Tokens = Tokens;

export declare namespace Number2_2 {
  export {
    Cdrs as Cdrs,
    type CdrToken as CdrToken,
    type ChargingPeriod as ChargingPeriod,
    type Price as Price,
    type CdrCreateParams as CdrCreateParams,
    type CdrRetrieveParams as CdrRetrieveParams,
  };

  export {
    Commands as Commands,
    type CommandCancelReservationParams as CommandCancelReservationParams,
    type CommandReserveNowParams as CommandReserveNowParams,
    type CommandStartSessionParams as CommandStartSessionParams,
    type CommandStopSessionParams as CommandStopSessionParams,
    type CommandUnlockConnectorParams as CommandUnlockConnectorParams,
  };

  export {
    Locations as Locations,
    type BusinessDetails as BusinessDetails,
    type Connector as Connector,
    type EnergyMix as EnergyMix,
    type Evse as Evse,
    type ExceptionalPeriod as ExceptionalPeriod,
    type GeoLocation as GeoLocation,
    type Image as Image,
    type LocationRetrieveParams as LocationRetrieveParams,
    type LocationUpdateParams as LocationUpdateParams,
  };

  export {
    Sessions as Sessions,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionUpdateParams as SessionUpdateParams,
  };

  export {
    Tariffs as Tariffs,
    type Tariff as Tariff,
    type TariffRetrieveParams as TariffRetrieveParams,
    type TariffUpdateParams as TariffUpdateParams,
    type TariffDeleteParams as TariffDeleteParams,
  };

  export {
    Tokens as Tokens,
    type Token as Token,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenUpdateParams as TokenUpdateParams,
  };
}
