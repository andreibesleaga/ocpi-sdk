// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.sessions.retrieve('sessionID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.sessions.update('sessionID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      body: { foo: {} },
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });
});
