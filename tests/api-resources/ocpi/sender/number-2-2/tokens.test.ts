// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ocpi.sender.number2_2.tokens.retrieve('uid', {
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.ocpi.sender.number2_2.tokens.list({
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      date_from: 'date_from',
      date_to: 'date_to',
      limit: 0,
      offset: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('authorize: required and optional params', async () => {
    const response = await client.ocpi.sender.number2_2.tokens.authorize('tokenUID', {
      location_id: 'location_id',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      type: 'AD_HOC_USER',
      connector_ids: ['string'],
      evse_uids: ['string'],
    });
  });
});
