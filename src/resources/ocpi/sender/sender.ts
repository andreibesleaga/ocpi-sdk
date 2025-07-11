// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Number2_2API from './number-2-2/number-2-2';
import { DisplayText, Number2_2, Number2_2UpdateParams } from './number-2-2/number-2-2';

export class Sender extends APIResource {
  number2_2: Number2_2API.Number2_2 = new Number2_2API.Number2_2(this._client);
}

Sender.Number2_2 = Number2_2;

export declare namespace Sender {
  export {
    Number2_2 as Number2_2,
    type DisplayText as DisplayText,
    type Number2_2UpdateParams as Number2_2UpdateParams,
  };
}
