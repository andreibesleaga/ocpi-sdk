// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChargingprofilesAPI from './chargingprofiles';
import {
  ActiveChargingProfile,
  ChargingProfile,
  ChargingprofileCreateResultParams,
  ChargingprofileUpdateParams,
  Chargingprofiles,
} from './chargingprofiles';

export class Sender extends APIResource {
  chargingprofiles: ChargingprofilesAPI.Chargingprofiles = new ChargingprofilesAPI.Chargingprofiles(
    this._client,
  );
}

Sender.Chargingprofiles = Chargingprofiles;

export declare namespace Sender {
  export {
    Chargingprofiles as Chargingprofiles,
    type ActiveChargingProfile as ActiveChargingProfile,
    type ChargingProfile as ChargingProfile,
    type ChargingprofileUpdateParams as ChargingprofileUpdateParams,
    type ChargingprofileCreateResultParams as ChargingprofileCreateResultParams,
  };
}
