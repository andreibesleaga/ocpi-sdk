// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V22API from './v22/v22';
import { V22 } from './v22/v22';

export class Receiver extends APIResource {
  v22: V22API.V22 = new V22API.V22(this._client);
}

Receiver.V22 = V22;

export declare namespace Receiver {
  export { V22 as V22 };
}
