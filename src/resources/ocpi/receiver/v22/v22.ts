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
  EnergySource,
  EnvironmentalImpact,
  Evse,
  ExceptionalPeriod,
  GeoLocation,
  Image,
  LocationModifyEvseParams,
  LocationModifyParams,
  LocationRetrieveEvseParams,
  LocationRetrieveParams,
  LocationUpdateConnectorParams,
  LocationUpdateEvseParams,
  LocationUpdateParams,
  Locations,
} from './locations';
import * as SessionsAPI from './sessions';
import { SessionRetrieveParams, SessionUpdateParams, Sessions } from './sessions';
import * as TariffsAPI from './tariffs';
import { Tariff, TariffDeleteParams, TariffRetrieveParams, TariffUpdateParams, Tariffs } from './tariffs';
import * as TokensAPI from './tokens';
import { EnergyContract, Token, TokenRetrieveParams, TokenUpdateParams, Tokens } from './tokens';

export class V22 extends APIResource {
  cdrs: CdrsAPI.Cdrs = new CdrsAPI.Cdrs(this._client);
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  tariffs: TariffsAPI.Tariffs = new TariffsAPI.Tariffs(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

V22.Cdrs = Cdrs;
V22.Commands = Commands;
V22.Locations = Locations;
V22.Sessions = Sessions;
V22.Tariffs = Tariffs;
V22.Tokens = Tokens;

export declare namespace V22 {
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
    type EnergyContract as EnergyContract,
    type Token as Token,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenUpdateParams as TokenUpdateParams,
  };
}
