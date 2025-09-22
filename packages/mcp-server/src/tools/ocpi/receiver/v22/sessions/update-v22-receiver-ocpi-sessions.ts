// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/sessions/{countryCode}/{partyID}/{sessionID}',
  operationId: 'putClientOwnedSession',
};

export const tool: Tool = {
  name: 'update_v22_receiver_ocpi_sessions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      countryCode: {
        type: 'string',
      },
      partyID: {
        type: 'string',
      },
      sessionID: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      auth_method: {
        type: 'string',
        enum: ['AUTH_REQUEST', 'COMMAND', 'WHITELIST'],
      },
      cdr_token: {
        $ref: '#/$defs/cdr_token',
      },
      connector_id: {
        type: 'string',
      },
      country_code: {
        type: 'string',
      },
      currency: {
        type: 'string',
      },
      evse_uid: {
        type: 'string',
      },
      kwh: {
        type: 'number',
      },
      last_updated: {
        type: 'string',
      },
      location_id: {
        type: 'string',
      },
      party_id: {
        type: 'string',
      },
      start_date_time: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['ACTIVE', 'COMPLETED', 'INVALID', 'PENDING', 'RESERVATION'],
      },
      'OCPI-from-country-code': {
        type: 'string',
      },
      'OCPI-from-party-id': {
        type: 'string',
      },
      'OCPI-to-country-code': {
        type: 'string',
      },
      'OCPI-to-party-id': {
        type: 'string',
      },
      'X-Correlation-ID': {
        type: 'string',
      },
      'X-Request-ID': {
        type: 'string',
      },
      authorization_reference: {
        type: 'string',
      },
      charging_periods: {
        type: 'array',
        items: {
          $ref: '#/$defs/charging_period',
        },
      },
      end_date_time: {
        type: 'string',
      },
      meter_id: {
        type: 'string',
      },
      total_cost: {
        $ref: '#/$defs/price',
      },
    },
    required: [
      'countryCode',
      'partyID',
      'sessionID',
      'id',
      'auth_method',
      'cdr_token',
      'connector_id',
      'country_code',
      'currency',
      'evse_uid',
      'kwh',
      'last_updated',
      'location_id',
      'party_id',
      'start_date_time',
      'status',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
    $defs: {
      cdr_token: {
        type: 'object',
        properties: {
          contract_id: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['AD_HOC_USER', 'APP_USER', 'OTHER', 'RFID'],
          },
          uid: {
            type: 'string',
          },
        },
        required: ['contract_id', 'type', 'uid'],
      },
      charging_period: {
        type: 'object',
        properties: {
          dimensions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: [
                    'CURRENT',
                    'ENERGY',
                    'ENERGY_EXPORT',
                    'ENERGY_IMPORT',
                    'MAX_CURRENT',
                    'MIN_CURRENT',
                    'MAX_POWER',
                    'MIN_POWER',
                    'PARKING_TIME',
                    'POWER',
                    'RESERVATION_TIME',
                    'STATE_OF_CHARGE',
                    'TIME',
                  ],
                },
                volume: {
                  type: 'number',
                },
              },
              required: ['type', 'volume'],
            },
          },
          start_date_time: {
            type: 'string',
          },
          tariff_id: {
            type: 'string',
          },
        },
        required: ['dimensions', 'start_date_time'],
      },
      price: {
        type: 'object',
        properties: {
          excl_vat: {
            type: 'number',
          },
          incl_vat: {
            type: 'number',
          },
        },
        required: ['excl_vat', 'incl_vat'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { sessionID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.sessions.update(sessionID, body));
};

export default { metadata, tool, handler };
