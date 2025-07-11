// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commands', () => {
  // skipped: tests are disabled for the time being
  test.skip('cancelReservation: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.commands.cancelReservation({
      reservation_id: 'reservation_id',
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('reserveNow: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.commands.reserveNow({
      token: {
        contract_id: 'contract_id',
        country_code: 'country_code',
        issuer: 'issuer',
        last_updated: 'last_updated',
        party_id: 'party_id',
        type: 'AD_HOC_USER',
        uid: 'uid',
        valid: true,
        whitelist: 'ALWAYS',
        default_profile_type: 'CHEAP',
        energy_contract: { supplier_name: 'supplier_name', contract_id: 'contract_id' },
        group_id: 'group_id',
        language: 'language',
        visual_number: 'visual_number',
      },
      expiry_date: 'expiry_date',
      location_id: 'location_id',
      reservation_id: 'reservation_id',
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      authorization_reference: 'authorization_reference',
      evse_uid: 'evse_uid',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('startSession: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.commands.startSession({
      token: {
        contract_id: 'contract_id',
        country_code: 'country_code',
        issuer: 'issuer',
        last_updated: 'last_updated',
        party_id: 'party_id',
        type: 'AD_HOC_USER',
        uid: 'uid',
        valid: true,
        whitelist: 'ALWAYS',
        default_profile_type: 'CHEAP',
        energy_contract: { supplier_name: 'supplier_name', contract_id: 'contract_id' },
        group_id: 'group_id',
        language: 'language',
        visual_number: 'visual_number',
      },
      location_id: 'location_id',
      response_url: 'response_url',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      authorization_reference: 'authorization_reference',
      evse_uid: 'evse_uid',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('stopSession: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.commands.stopSession({
      response_url: 'response_url',
      session_id: 'session_id',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('unlockConnector: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.commands.unlockConnector({
      connector_id: 'connector_id',
      evse_uid: 'evse_uid',
      location_id: 'location_id',
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
