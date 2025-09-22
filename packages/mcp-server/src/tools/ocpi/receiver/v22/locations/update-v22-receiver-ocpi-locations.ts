// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}',
  operationId: 'putClientOwnedLocation',
};

export const tool: Tool = {
  name: 'update_v22_receiver_ocpi_locations',
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
      locationID: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      coordinates: {
        $ref: '#/$defs/geo_location',
      },
      country: {
        type: 'string',
      },
      country_code: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
      },
      party_id: {
        type: 'string',
      },
      publish: {
        type: 'boolean',
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
      charging_when_closed: {
        type: 'string',
      },
      directions: {
        type: 'array',
        items: {
          $ref: '#/$defs/display_text',
        },
      },
      energy_mix: {
        $ref: '#/$defs/energy_mix',
      },
      evses: {
        type: 'array',
        items: {
          $ref: '#/$defs/evse',
        },
      },
      facilities: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'HOTEL',
            'RESTAURANT',
            'CAFE',
            'MALL',
            'SUPERMARKET',
            'SPORT',
            'RECREATION_AREA',
            'NATURE',
            'MUSEUM',
            'BIKE_SHARING',
            'BUS_STOP',
            'TAXI_STAND',
            'TRAM_STOP',
            'METRO_STATION',
            'TRAIN_STATION',
            'AIRPORT',
            'PARKING_LOT',
            'CARPOOL_PARKING',
            'FUEL_STATION',
            'WIFI',
          ],
        },
      },
      images: {
        type: 'array',
        items: {
          $ref: '#/$defs/image',
        },
      },
      name: {
        type: 'string',
      },
      opening_times: {
        type: 'object',
        properties: {
          twentyfourseven: {
            type: 'boolean',
          },
          exceptional_closings: {
            type: 'array',
            items: {
              $ref: '#/$defs/exceptional_period',
            },
          },
          exceptional_openings: {
            type: 'array',
            items: {
              $ref: '#/$defs/exceptional_period',
            },
          },
          regular_hours: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                period_begin: {
                  type: 'string',
                },
                period_end: {
                  type: 'string',
                },
                weekday: {
                  type: 'integer',
                },
              },
              required: ['period_begin', 'period_end', 'weekday'],
            },
          },
        },
        required: ['twentyfourseven'],
      },
      operator: {
        $ref: '#/$defs/business_details',
      },
      owner: {
        $ref: '#/$defs/business_details',
      },
      parking_type: {
        type: 'string',
        enum: [
          'ALONG_MOTORWAY',
          'PARKING_GARAGE',
          'PARKING_LOT',
          'ON_DRIVEWAY',
          'ON_STREET',
          'UNDERGROUND_GARAGE',
        ],
      },
      postal_code: {
        type: 'string',
      },
      publish_allowed_to: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            'group_id ': {
              type: 'string',
            },
            issuer: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['AD_HOC_USER', 'APP_USER', 'OTHER', 'RFID'],
            },
            uid: {
              type: 'string',
            },
            visual_number: {
              type: 'string',
            },
          },
        },
      },
      related_locations: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            latitude: {
              type: 'string',
            },
            longitude: {
              type: 'string',
            },
            name: {
              $ref: '#/$defs/display_text',
            },
          },
          required: ['latitude', 'longitude'],
        },
      },
      state: {
        type: 'string',
      },
      suboperator: {
        $ref: '#/$defs/business_details',
      },
      time_zone: {
        type: 'string',
      },
    },
    required: [
      'countryCode',
      'partyID',
      'locationID',
      'id',
      'address',
      'city',
      'coordinates',
      'country',
      'country_code',
      'last_updated',
      'party_id',
      'publish',
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
      evse: {
        type: 'object',
        properties: {
          connectors: {
            type: 'array',
            items: {
              $ref: '#/$defs/connector',
            },
          },
          last_updated: {
            type: 'string',
          },
          status: {
            type: 'string',
            enum: [
              'AVAILABLE',
              'BLOCKED',
              'CHARGING',
              'INOPERATIVE',
              'OUTOFORDER',
              'PLANNED',
              'REMOVED',
              'RESERVED',
              'UNKNOWN',
            ],
          },
          uid: {
            type: 'string',
            description:
              'Uniquely identifies the EVSE within the CPOs platform (and\nsuboperator platforms).',
          },
          capabilities: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'CHARGING_PROFILE_CAPABLE',
                'CHARGING_PREFERENCES_CAPABLE',
                'CHIP_CARD_SUPPORT',
                'CONTACTLESS_CARD_SUPPORT',
                'CREDIT_CARD_PAYABLE',
                'DEBIT_CARD_PAYABLE',
                'PED_TERMINAL',
                'REMOTE_START_STOP_CAPABLE',
                'RESERVABLE',
                'RFID_READER',
                'START_SESSION_CONNECTOR_REQUIRED',
                'TOKEN_GROUP_CAPABLE',
                'UNLOCK_CAPABLE',
              ],
            },
          },
          coordinates: {
            $ref: '#/$defs/geo_location',
          },
          directions: {
            type: 'array',
            items: {
              $ref: '#/$defs/display_text',
            },
          },
          evse_id: {
            type: 'string',
          },
          floor_level: {
            type: 'string',
          },
          images: {
            type: 'array',
            items: {
              $ref: '#/$defs/image',
            },
          },
          parking_restrictions: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['EV_ONLY', 'PLUGGED', 'DISABLED', 'CUSTOMERS', 'MOTORCYCLES'],
            },
          },
          physical_reference: {
            type: 'string',
          },
          status_schedule: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                period_begin: {
                  type: 'string',
                },
                status: {
                  type: 'string',
                  enum: [
                    'AVAILABLE',
                    'BLOCKED',
                    'CHARGING',
                    'INOPERATIVE',
                    'OUTOFORDER',
                    'PLANNED',
                    'REMOVED',
                    'RESERVED',
                    'UNKNOWN',
                  ],
                },
                period_end: {
                  type: 'string',
                },
              },
              required: ['period_begin', 'status'],
            },
          },
        },
        required: ['connectors', 'last_updated', 'status', 'uid'],
      },
      connector: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          format: {
            type: 'string',
            enum: ['SOCKET', 'CABLE'],
          },
          last_updated: {
            type: 'string',
          },
          max_voltage: {
            type: 'integer',
          },
          power_type: {
            type: 'string',
            enum: ['AC_1_PHASE', 'AC_3_PHASE', 'DC'],
          },
          standard: {
            type: 'string',
            enum: [
              'CHADEMO',
              'CHAOJI',
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
              'GBT_AC',
              'GBT_DC',
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
              'NEMA_5_20',
              'NEMA_6_30',
              'NEMA_6_50',
              'NEMA_10_30',
              'NEMA_10_50',
              'NEMA_14_30',
              'NEMA_14_50',
              'PANTOGRAPH_BOTTOM_UP',
              'PANTOGRAPH_TOP_DOWN',
              'TESLA_R',
              'TESLA_S',
              'UNKNOWN',
            ],
          },
          max_amperage: {
            type: 'integer',
            description:
              'Maximum amperage of the connector, in ampere [A].\n\nOCM allows null here due to operators commonly leaving it blank',
          },
          max_electric_power: {
            type: 'integer',
          },
          tariff_ids: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          terms_and_conditions: {
            type: 'string',
          },
        },
        required: ['id', 'format', 'last_updated', 'max_voltage', 'power_type', 'standard'],
      },
      image: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            enum: ['CHARGER', 'ENTRANCE', 'LOCATION', 'NETWORK', 'OPERATOR', 'OTHER', 'OWNER'],
          },
          type: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
          height: {
            type: 'integer',
          },
          thumbnail: {
            type: 'string',
          },
          width: {
            type: 'integer',
          },
        },
        required: ['category', 'type', 'url'],
      },
      exceptional_period: {
        type: 'object',
        properties: {
          period_begin: {
            type: 'string',
          },
          period_end: {
            type: 'string',
          },
        },
        required: ['period_begin', 'period_end'],
      },
      business_details: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          logo: {
            $ref: '#/$defs/image',
          },
          website: {
            type: 'string',
          },
        },
        required: ['name'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { locationID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.locations.update(locationID, body));
};

export default { metadata, tool, handler };
