// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V22API from './v22/v22';
import { DisplayText, V22, V22UpdateParams } from './v22/v22';

export class Sender extends APIResource {
  v22: V22API.V22 = new V22API.V22(this._client);
}

Sender.V22 = V22;

export declare namespace Sender {
  export { V22 as V22, type DisplayText as DisplayText, type V22UpdateParams as V22UpdateParams };
}
