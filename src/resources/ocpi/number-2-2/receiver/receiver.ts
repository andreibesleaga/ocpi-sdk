// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChargingprofilesAPI from './chargingprofiles';
import {
  ChargingprofileDeleteParams,
  ChargingprofileRetrieveParams,
  ChargingprofileUpdateParams,
  Chargingprofiles,
} from './chargingprofiles';

export class Receiver extends APIResource {
  chargingprofiles: ChargingprofilesAPI.Chargingprofiles = new ChargingprofilesAPI.Chargingprofiles(
    this._client,
  );
}

Receiver.Chargingprofiles = Chargingprofiles;

export declare namespace Receiver {
  export {
    Chargingprofiles as Chargingprofiles,
    type ChargingprofileRetrieveParams as ChargingprofileRetrieveParams,
    type ChargingprofileUpdateParams as ChargingprofileUpdateParams,
    type ChargingprofileDeleteParams as ChargingprofileDeleteParams,
  };
}
