// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.cdrs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/receiver/2.2/cdrs',
  operationId: 'postClientOwnedCdr',
};

export const tool: Tool = {
  name: 'create_v22_receiver_ocpi_cdrs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      auth_method: {
        type: 'string',
        enum: ['AUTH_REQUEST', 'COMMAND', 'WHITELIST'],
      },
      cdr_location: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          connector_format: {
            type: 'string',
            enum: ['SOCKET', 'CABLE'],
          },
          connector_id: {
            type: 'string',
          },
          connector_power_type: {
            type: 'string',
            enum: ['AC_1_PHASE', 'AC_3_PHASE', 'DC'],
          },
          connector_standard: {
            type: 'string',
            enum: [
              'CHADEMO',
              'DOMESTIC_A',
              'DOMESTIC_B',
              'DOMESTIC_C',
              'DOMESTIC_D',
              'DOMESTIC_E',
              'DOMESTIC_F',
              'DOMESTIC_G',
              'DOMESTIC_H',
              'DOMESTIC_I',
              'DOMESTIC_J',
              'DOMESTIC_K',
              'DOMESTIC_L',
              'IEC_60309_2_single_16',
              'IEC_60309_2_three_16',
              'IEC_60309_2_three_32',
              'IEC_60309_2_three_64',
              'IEC_62196_T1',
              'IEC_62196_T1_COMBO',
              'IEC_62196_T2',
              'IEC_62196_T2_COMBO',
              'IEC_62196_T3A',
              'IEC_62196_T3C',
              'PANTOGRAPH_BOTTOM_UP',
              'PANTOGRAPH_TOP_DOWN',
              'TESLA_R',
              'TESLA_S',
            ],
          },
          coordinates: {
            $ref: '#/$defs/geo_location',
          },
          country: {
            type: 'string',
          },
          evse_id: {
            type: 'string',
          },
          evse_uid: {
            type: 'string',
          },
          postal_code: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        required: [
          'id',
          'address',
          'city',
          'connector_format',
          'connector_id',
          'connector_power_type',
          'connector_standard',
          'coordinates',
          'country',
          'evse_id',
          'evse_uid',
          'postal_code',
        ],
      },
      cdr_token: {
        $ref: '#/$defs/cdr_token',
      },
      charging_periods: {
        type: 'array',
        items: {
          $ref: '#/$defs/charging_period',
        },
      },
      country_code: {
        type: 'string',
      },
      currency: {
        type: 'string',
      },
      end_date_time: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
      },
      party_id: {
        type: 'string',
      },
      start_date_time: {
        type: 'string',
      },
      total_cost: {
        $ref: '#/$defs/price',
      },
      total_energy: {
        type: 'number',
      },
      total_time: {
        type: 'number',
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
      credit: {
        type: 'boolean',
      },
      credit_reference_id: {
        type: 'string',
      },
      invoice_reference_id: {
        type: 'string',
      },
      meter_id: {
        type: 'string',
      },
      remark: {
        type: 'string',
      },
      session_id: {
        type: 'string',
      },
      signed_data: {
        type: 'object',
        properties: {
          encoding_method: {
            type: 'string',
          },
          signed_values: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                nature: {
                  type: 'string',
                },
                plain_data: {
                  type: 'string',
                },
                signed_data: {
                  type: 'string',
                },
              },
              required: ['nature', 'plain_data', 'signed_data'],
            },
          },
          url: {
            type: 'string',
          },
          encoding_method_version: {
            type: 'integer',
          },
          public_key: {
            type: 'string',
          },
        },
        required: ['encoding_method', 'signed_values', 'url'],
      },
      tariffs: {
        type: 'array',
        items: {
          $ref: '#/$defs/tariff',
        },
      },
      total_energy_cost: {
        $ref: '#/$defs/price',
      },
      total_fixed_cost: {
        $ref: '#/$defs/price',
      },
      total_parking_cost: {
        $ref: '#/$defs/price',
      },
      total_parking_time: {
        type: 'number',
      },
      total_reservation_cost: {
        $ref: '#/$defs/price',
      },
      total_time_cost: {
        $ref: '#/$defs/price',
      },
    },
    required: [
      'id',
      'auth_method',
      'cdr_location',
      'cdr_token',
      'charging_periods',
      'country_code',
      'currency',
      'end_date_time',
      'last_updated',
      'party_id',
      'start_date_time',
      'total_cost',
      'total_energy',
      'total_time',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
    $defs: {
      geo_location: {
        type: 'object',
        properties: {
          latitude: {
            type: 'string',
          },
          longitude: {
            type: 'string',
          },
        },
        required: ['latitude', 'longitude'],
      },
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
      tariff: {
        type: 'object',
        properties: {
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
        },
        required: ['id', 'country_code', 'currency', 'elements', 'last_updated', 'party_id'],
      },
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
  annotations: {},
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.cdrs.create(body));
};

export default { metadata, tool, handler };
