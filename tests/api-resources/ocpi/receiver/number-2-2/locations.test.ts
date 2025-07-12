// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.retrieve('connectorID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      evseUID: 'evseUID',
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
    const response = await client.ocpi.receiver.number2_2.locations.update('connectorID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      evseUID: 'evseUID',
      body: { foo: {} },
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('modify: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.modify('locationID', {
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

  // skipped: tests are disabled for the time being
  test.skip('modifyEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.modifyEvse('evseUID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      body: { foo: {} },
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.retrieveEvse('evseUID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateConnector: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.updateConnector('connectorID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      evseUID: 'evseUID',
      id: 'id',
      format: 'SOCKET',
      last_updated: 'last_updated',
      max_voltage: 0,
      power_type: 'AC_1_PHASE',
      standard: 'CHADEMO',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      max_amperage: 0,
      max_electric_power: 0,
      tariff_ids: ['string'],
      terms_and_conditions: 'terms_and_conditions',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.number2_2.locations.updateEvse('evseUID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      locationID: 'locationID',
      connectors: [
        {
          id: 'id',
          format: 'SOCKET',
          last_updated: 'last_updated',
          max_voltage: 0,
          power_type: 'AC_1_PHASE',
          standard: 'CHADEMO',
          max_amperage: 0,
          max_electric_power: 0,
          tariff_ids: ['string'],
          terms_and_conditions: 'terms_and_conditions',
        },
      ],
      last_updated: 'last_updated',
      status: 'AVAILABLE',
      uid: 'uid',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      capabilities: ['CHARGING_PROFILE_CAPABLE'],
      coordinates: { latitude: 'latitude', longitude: 'longitude' },
      directions: [{ language: 'language', text: 'text' }],
      evse_id: 'evse_id',
      floor_level: 'floor_level',
      images: [
        {
          category: 'CHARGER',
          type: 'type',
          url: 'https://example.com',
          height: 0,
          thumbnail: 'https://example.com',
          width: 0,
        },
      ],
      parking_restrictions: ['EV_ONLY'],
      physical_reference: 'physical_reference',
      status_schedule: [{ period_begin: 'period_begin', status: 'AVAILABLE', period_end: 'period_end' }],
    });
  });
});
