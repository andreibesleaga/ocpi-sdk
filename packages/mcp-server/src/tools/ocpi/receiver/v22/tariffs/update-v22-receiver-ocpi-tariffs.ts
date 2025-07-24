// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.tariffs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/tariffs/{countryCode}/{partyID}/{tariffID}',
  operationId: 'putClientOwnedTariff',
};

export const tool: Tool = {
  name: 'update_v22_receiver_ocpi_tariffs',
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
      tariffID: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      country_code: {
        type: 'string',
      },
      currency: {
        type: 'string',
      },
      elements: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            price_components: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  price: {
                    type: 'number',
                  },
                  step_size: {
                    type: 'integer',
                  },
                  type: {
                    type: 'string',
                    enum: ['ENERGY', 'FLAT', 'PARKING_TIME', 'TIME'],
                  },
                  vat: {
                    type: 'number',
                  },
                },
                required: ['price', 'step_size', 'type'],
              },
            },
            restrictions: {
              type: 'object',
              properties: {
                day_of_week: {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
                  },
                },
                end_date: {
                  type: 'string',
                },
                end_time: {
                  type: 'string',
                },
                max_current: {
                  type: 'number',
                },
                max_duration: {
                  type: 'integer',
                },
                max_kwh: {
                  type: 'number',
                },
                max_power: {
                  type: 'number',
                },
                min_current: {
                  type: 'number',
                },
                min_duration: {
                  type: 'integer',
                },
                min_kwh: {
                  type: 'number',
                },
                min_power: {
                  type: 'number',
                },
                reservation: {
                  type: 'string',
                  enum: ['RESERVATION', 'RESERVATION_EXPIRES'],
                },
                start_date: {
                  type: 'string',
                },
                start_time: {
                  type: 'string',
                },
              },
            },
          },
          required: ['price_components'],
        },
      },
      last_updated: {
        type: 'string',
      },
      party_id: {
        type: 'string',
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
      end_date_time: {
        type: 'string',
      },
      energy_mix: {
        $ref: '#/$defs/energy_mix',
      },
      max_price: {
        $ref: '#/$defs/price',
      },
      min_price: {
        $ref: '#/$defs/price',
      },
      start_date_time: {
        type: 'string',
      },
      tariff_alt_text: {
        type: 'array',
        items: {
          $ref: '#/$defs/display_text',
        },
      },
      tariff_alt_url: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['AD_HOC_PAYMENT', 'PROFILE_CHEAP', 'PROFILE_FAST', 'PROFILE_GREEN', 'REGULAR'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'countryCode',
      'partyID',
      'tariffID',
      'id',
      'country_code',
      'currency',
      'elements',
      'last_updated',
      'party_id',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
    $defs: {
      energy_mix: {
        type: 'object',
        properties: {
          is_green_energy: {
            type: 'boolean',
          },
          energy_product_name: {
            type: 'string',
          },
          energy_sources: {
            type: 'array',
            items: {
              $ref: '#/$defs/energy_source',
            },
          },
          environ_impact: {
            type: 'array',
            items: {
              $ref: '#/$defs/environmental_impact',
            },
          },
          supplier_name: {
            type: 'string',
          },
        },
        required: ['is_green_energy'],
      },
      energy_source: {
        type: 'object',
        properties: {
          percentage: {
            type: 'number',
          },
          source: {
            type: 'string',
            enum: ['NUCLEAR', 'GENERAL_FOSSIL', 'COAL', 'GAS', 'GENERAL_GREEN', 'SOLAR', 'WIND', 'WATER'],
          },
        },
        required: ['percentage', 'source'],
      },
      environmental_impact: {
        type: 'object',
        properties: {
          amount: {
            type: 'number',
          },
          category: {
            type: 'string',
            enum: ['NUCLEAR_WASTE', 'CARBON_DIOXIDE'],
          },
        },
        required: ['amount', 'category'],
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
      display_text: {
        type: 'object',
        properties: {
          language: {
            type: 'string',
          },
          text: {
            type: 'string',
          },
        },
        required: ['language', 'text'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { tariffID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.tariffs.update(tariffID, body));
};

export default { metadata, tool, handler };
