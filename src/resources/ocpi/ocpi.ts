// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Number2_2API from './number-2-2/number-2-2';
import { Number2_2 } from './number-2-2/number-2-2';
import * as ReceiverAPI from './receiver/receiver';
import { Receiver } from './receiver/receiver';
import * as SenderAPI from './sender/sender';
import { Sender } from './sender/sender';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ocpi extends APIResource {
  number2_2: Number2_2API.Number2_2 = new Number2_2API.Number2_2(this._client);
  sender: SenderAPI.Sender = new SenderAPI.Sender(this._client);
  receiver: ReceiverAPI.Receiver = new ReceiverAPI.Receiver(this._client);

  /**
   * This endpoint lists all the available OCPI versions and the corresponding URLs
   * to where version specific details such as the supported endpoints can be found.
   */
  listVersions(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/ocpi/versions', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

Ocpi.Number2_2 = Number2_2;
Ocpi.Sender = Sender;
Ocpi.Receiver = Receiver;

export declare namespace Ocpi {
  export { Number2_2 as Number2_2 };

  export { Sender as Sender };

  export { Receiver as Receiver };
}
