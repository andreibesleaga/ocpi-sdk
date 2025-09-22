// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  test('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.tokens.retrieve('tokenUID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      type: 'AD_HOC_USER',
    });
  });

  test('update: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.tokens.update('tokenUID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      contract_id: 'contract_id',
      country_code: 'country_code',
      issuer: 'issuer',
      last_updated: 'last_updated',
      party_id: 'party_id',
      body_type: 'AD_HOC_USER',
      uid: 'uid',
      valid: true,
      whitelist: 'ALWAYS',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      query_type: 'AD_HOC_USER',
      default_profile_type: 'CHEAP',
      energy_contract: { supplier_name: 'supplier_name', contract_id: 'contract_id' },
      group_id: 'group_id',
      language: 'language',
      visual_number: 'visual_number',
    });
  });
});
