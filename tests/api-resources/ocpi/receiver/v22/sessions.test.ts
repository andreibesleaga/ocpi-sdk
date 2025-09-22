// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('retrieve: required and optional params', async () => {
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

  test('update: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.sessions.update('sessionID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      id: 'id',
      auth_method: 'AUTH_REQUEST',
      cdr_token: { contract_id: 'contract_id', type: 'AD_HOC_USER', uid: 'uid' },
      connector_id: 'connector_id',
      country_code: 'country_code',
      currency: 'currency',
      evse_uid: 'evse_uid',
      kwh: 0,
      last_updated: 'last_updated',
      location_id: 'location_id',
      party_id: 'party_id',
      start_date_time: 'start_date_time',
      status: 'ACTIVE',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      authorization_reference: 'authorization_reference',
      charging_periods: [
        {
          dimensions: [{ type: 'CURRENT', volume: 0 }],
          start_date_time: 'start_date_time',
          tariff_id: 'tariff_id',
        },
      ],
      end_date_time: 'end_date_time',
      meter_id: 'meter_id',
      total_cost: { excl_vat: 0, incl_vat: 0 },
    });
  });
});
