// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cdrs', () => {
  test('create: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.cdrs.create({
      id: 'id',
      auth_method: 'AUTH_REQUEST',
      cdr_location: {
        id: 'id',
        address: 'address',
        city: 'city',
        connector_format: 'SOCKET',
        connector_id: 'connector_id',
        connector_power_type: 'AC_1_PHASE',
        connector_standard: 'CHADEMO',
        coordinates: { latitude: 'latitude', longitude: 'longitude' },
        country: 'country',
        evse_id: 'evse_id',
        evse_uid: 'evse_uid',
        postal_code: 'postal_code',
        name: 'name',
      },
      cdr_token: { contract_id: 'contract_id', type: 'AD_HOC_USER', uid: 'uid' },
      charging_periods: [
        {
          dimensions: [{ type: 'CURRENT', volume: 0 }],
          start_date_time: 'start_date_time',
          tariff_id: 'tariff_id',
        },
      ],
      country_code: 'country_code',
      currency: 'currency',
      end_date_time: 'end_date_time',
      last_updated: 'last_updated',
      party_id: 'party_id',
      start_date_time: 'start_date_time',
      total_cost: { excl_vat: 0, incl_vat: 0 },
      total_energy: 0,
      total_time: 0,
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
      authorization_reference: 'authorization_reference',
      credit: true,
      credit_reference_id: 'credit_reference_id',
      invoice_reference_id: 'invoice_reference_id',
      meter_id: 'meter_id',
      remark: 'remark',
      session_id: 'session_id',
      signed_data: {
        encoding_method: 'encoding_method',
        signed_values: [{ nature: 'nature', plain_data: 'plain_data', signed_data: 'signed_data' }],
        url: 'url',
        encoding_method_version: 0,
        public_key: 'public_key',
      },
      tariffs: [
        {
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
        },
      ],
      total_energy_cost: { excl_vat: 0, incl_vat: 0 },
      total_fixed_cost: { excl_vat: 0, incl_vat: 0 },
      total_parking_cost: { excl_vat: 0, incl_vat: 0 },
      total_parking_time: 0,
      total_reservation_cost: { excl_vat: 0, incl_vat: 0 },
      total_time_cost: { excl_vat: 0, incl_vat: 0 },
    });
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.ocpi.receiver.v22.cdrs.retrieve('cdrID', {
      'OCPI-from-country-code': 'OCPI-from-country-code',
      'OCPI-from-party-id': 'OCPI-from-party-id',
      'OCPI-to-country-code': 'OCPI-to-country-code',
      'OCPI-to-party-id': 'OCPI-to-party-id',
      'X-Correlation-ID': 'X-Correlation-ID',
      'X-Request-ID': 'X-Request-ID',
    });
  });
});
