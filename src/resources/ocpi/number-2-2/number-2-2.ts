// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CredentialsAPI from './credentials';
import { CredentialCreateParams, CredentialUpdateParams, Credentials } from './credentials';
import * as ReceiverAPI from './receiver/receiver';
import { Receiver } from './receiver/receiver';
import * as SenderAPI from './sender/sender';
import { Sender } from './sender/sender';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Number2_2 extends APIResource {
  sender: SenderAPI.Sender = new SenderAPI.Sender(this._client);
  receiver: ReceiverAPI.Receiver = new ReceiverAPI.Receiver(this._client);
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);

  retrieve(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/ocpi/2.2', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

Number2_2.Sender = Sender;
Number2_2.Receiver = Receiver;

export declare namespace Number2_2 {
  export { Sender as Sender };

  export { Receiver as Receiver };

  export {
    type Credentials as Credentials,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
