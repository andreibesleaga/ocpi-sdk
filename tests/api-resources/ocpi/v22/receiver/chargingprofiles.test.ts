// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chargingprofiles', () => {
  test('retrieve: required and optional params', async () => {
    const response = await client.ocpi.v22.receiver.chargingprofiles.retrieve('sessionId', {
      duration: 0,
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  test('update: required and optional params', async () => {
    const response = await client.ocpi.v22.receiver.chargingprofiles.update('sessionId', {
      charging_profile: {
        charging_rate_unit: 'W',
        charging_profile_period: [{ limit: 0, start_period: 0 }],
        duration: 0,
        min_charging_rate: 0,
        start_date_time: 'start_date_time',
      },
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  test('delete: required and optional params', async () => {
    const response = await client.ocpi.v22.receiver.chargingprofiles.delete('sessionId', {
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });
});
