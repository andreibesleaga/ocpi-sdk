// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tariffs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.tariffs.retrieve('tariffID', {
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
    const response = await client.ocpi.receiver.v22.tariffs.update('tariffID', {
      countryCode: 'countryCode',
      partyID: 'partyID',
      id: 'id',
      country_code: 'country_code',
      currency: 'currency',
      elements: [
        {
          price_components: [{ price: 0, step_size: 0, type: 'ENERGY', vat: 0 }],
          restrictions: {
            day_of_week: ['MONDAY'],
            end_date: 'end_date',
            end_time: 'end_time',
            max_current: 0,
            max_duration: 0,
            max_kwh: 0,
            max_power: 0,
            min_current: 0,
            min_duration: 0,
            min_kwh: 0,
            min_power: 0,
            reservation: 'RESERVATION',
            start_date: 'start_date',
            start_time: 'start_time',
          },
        },
      ],
      last_updated: 'last_updated',
      party_id: 'party_id',
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      end_date_time: 'end_date_time',
      energy_mix: {
        is_green_energy: true,
        energy_product_name: 'energy_product_name',
        energy_sources: [{ percentage: 0, source: 'NUCLEAR' }],
        environ_impact: [{ amount: 0, category: 'NUCLEAR_WASTE' }],
        supplier_name: 'supplier_name',
      },
      max_price: { excl_vat: 0, incl_vat: 0 },
      min_price: { excl_vat: 0, incl_vat: 0 },
      start_date_time: 'start_date_time',
      tariff_alt_text: [{ language: 'language', text: 'text' }],
      tariff_alt_url: 'tariff_alt_url',
      type: 'AD_HOC_PAYMENT',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.tariffs.delete('tariffID', {
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
});
