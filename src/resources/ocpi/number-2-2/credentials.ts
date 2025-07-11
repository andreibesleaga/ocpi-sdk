// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LocationsAPI from '../receiver/number-2-2/locations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Credentials extends APIResource {
  create(body: CredentialCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/ocpi/2.2/credentials', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  update(body: CredentialUpdateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.put('/ocpi/2.2/credentials', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  list(options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/ocpi/2.2/credentials', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  delete(options?: RequestOptions): APIPromise<Response> {
    return this._client.delete('/ocpi/2.2/credentials', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface Credentials {
  token: string;

  roles: Array<Credentials.Role>;

  url: string;
}

export namespace Credentials {
  export interface Role {
    business_details: LocationsAPI.BusinessDetails;

    country_code: string;

    party_id: string;

    role: 'CPO' | 'EMSP' | 'HUB' | 'NAP' | 'NSP' | 'OTHER' | 'SCSP';
  }
}

export interface CredentialCreateParams {
  token: string;

  roles: Array<CredentialCreateParams.Role>;

  url: string;
}

export namespace CredentialCreateParams {
  export interface Role {
    business_details: LocationsAPI.BusinessDetails;

    country_code: string;

    party_id: string;

    role: 'CPO' | 'EMSP' | 'HUB' | 'NAP' | 'NSP' | 'OTHER' | 'SCSP';
  }
}

export interface CredentialUpdateParams {
  token: string;

  roles: Array<CredentialUpdateParams.Role>;

  url: string;
}

export namespace CredentialUpdateParams {
  export interface Role {
    business_details: LocationsAPI.BusinessDetails;

    country_code: string;

    party_id: string;

    role: 'CPO' | 'EMSP' | 'HUB' | 'NAP' | 'NSP' | 'OTHER' | 'SCSP';
  }
}

export declare namespace Credentials {
  export {
    type Credentials as Credentials,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
