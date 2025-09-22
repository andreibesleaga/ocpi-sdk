// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  test('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.retrieve('locationID', {
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
    const response = await client.ocpi.receiver.v22.locations.update('locationID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      id: 'id',
      address: 'address',
      city: 'city',
      coordinates: { latitude: 'latitude', longitude: 'longitude' },
      country: 'country',
      country_code: 'country_code',
      last_updated: 'last_updated',
      party_id: 'party_id',
      publish: true,
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      charging_when_closed: 'charging_when_closed',
      directions: [{ language: 'language', text: 'text' }],
      energy_mix: {
        is_green_energy: true,
        energy_product_name: 'energy_product_name',
        energy_sources: [{ percentage: 0, source: 'NUCLEAR' }],
        environ_impact: [{ amount: 0, category: 'NUCLEAR_WASTE' }],
        supplier_name: 'supplier_name',
      },
      evses: [
        {
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
        },
      ],
      facilities: ['HOTEL'],
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
      name: 'name',
      opening_times: {
        twentyfourseven: true,
        exceptional_closings: [{ period_begin: 'period_begin', period_end: 'period_end' }],
        exceptional_openings: [{ period_begin: 'period_begin', period_end: 'period_end' }],
        regular_hours: [{ period_begin: 'period_begin', period_end: 'period_end', weekday: 0 }],
      },
      operator: {
        name: 'name',
        logo: {
          category: 'CHARGER',
          type: 'type',
          url: 'https://example.com',
          height: 0,
          thumbnail: 'https://example.com',
          width: 0,
        },
        website: 'website',
      },
      owner: {
        name: 'name',
        logo: {
          category: 'CHARGER',
          type: 'type',
          url: 'https://example.com',
          height: 0,
          thumbnail: 'https://example.com',
          width: 0,
        },
        website: 'website',
      },
      parking_type: 'ALONG_MOTORWAY',
      postal_code: 'postal_code',
      publish_allowed_to: [
        {
          'group_id ': 'group_id ',
          issuer: 'issuer',
          type: 'AD_HOC_USER',
          uid: 'uid',
          visual_number: 'visual_number',
        },
      ],
      related_locations: [
        { latitude: 'latitude', longitude: 'longitude', name: { language: 'language', text: 'text' } },
      ],
      state: 'state',
      suboperator: {
        name: 'name',
        logo: {
          category: 'CHARGER',
          type: 'type',
          url: 'https://example.com',
          height: 0,
          thumbnail: 'https://example.com',
          width: 0,
        },
        website: 'website',
      },
      time_zone: 'time_zone',
    });
  });

  test('modify: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.modify('locationID', {
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

  test('modifyEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.modifyEvse('evseUID', {
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

  test('retrieveEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.retrieveEvse('evseUID', {
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

  test('updateConnector: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.updateConnector('connectorID', {
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

  test('updateEvse: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.locations.updateEvse('evseUID', {
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
