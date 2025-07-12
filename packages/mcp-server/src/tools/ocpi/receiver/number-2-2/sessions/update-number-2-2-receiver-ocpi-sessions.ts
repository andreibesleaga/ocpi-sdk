// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.number_2_2.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/sessions/{countryCode}/{partyID}/{sessionID}',
  operationId: 'putClientOwnedSession',
};

export const tool: Tool = {
  name: 'update_number_2_2_receiver_ocpi_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
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
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { sessionID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.number2_2.sessions.update(sessionID, body));
};

export default { metadata, tool, handler };
