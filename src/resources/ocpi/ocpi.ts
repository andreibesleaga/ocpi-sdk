// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReceiverAPI from './receiver/receiver';
import { Receiver } from './receiver/receiver';
import * as SenderAPI from './sender/sender';
import { Sender } from './sender/sender';
import * as V22API from './v22/v22';
import { V22 } from './v22/v22';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ocpi extends APIResource {
  v22: V22API.V22 = new V22API.V22(this._client);
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

Ocpi.V22 = V22;
Ocpi.Sender = Sender;
Ocpi.Receiver = Receiver;

export declare namespace Ocpi {
  export { V22 as V22 };

  export { Sender as Sender };

  export { Receiver as Receiver };
}
