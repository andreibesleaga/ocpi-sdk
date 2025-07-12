// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OcpiSDK from 'ocpi-sdk';

const client = new OcpiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credentials', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.ocpi.v22.credentials.create({
      token: 'token',
      roles: [
        {
          business_details: {
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
          country_code: 'country_code',
          party_id: 'party_id',
          role: 'CPO',
        },
      ],
      url: 'url',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.ocpi.v22.credentials.update({
      token: 'token',
      roles: [
        {
          business_details: {
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
          country_code: 'country_code',
          party_id: 'party_id',
          role: 'CPO',
        },
      ],
      url: 'url',
    });
  });
});
