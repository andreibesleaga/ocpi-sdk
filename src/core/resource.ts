// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OcpiSDK } from '../client';

export abstract class APIResource {
  protected _client: OcpiSDK;

  constructor(client: OcpiSDK) {
    this._client = client;
  }
}
