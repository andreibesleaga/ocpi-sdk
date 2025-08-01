// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}/{connectorID}',
  operationId: 'putClientOwnedConnector',
};

export const tool: Tool = {
  name: 'update_connector_v22_receiver_ocpi_locations',
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
      evseUID: {
        type: 'string',
      },
      connectorID: {
        type: 'string',
      },
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
    required: [
      'countryCode',
      'partyID',
      'locationID',
      'evseUID',
      'connectorID',
      'id',
      'format',
      'last_updated',
      'max_voltage',
      'power_type',
      'standard',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { connectorID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.locations.updateConnector(connectorID, body));
};

export default { metadata, tool, handler };
