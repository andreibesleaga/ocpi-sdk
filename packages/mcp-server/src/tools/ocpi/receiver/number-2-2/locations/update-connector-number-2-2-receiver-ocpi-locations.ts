// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.number_2_2.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}/{connectorID}',
  operationId: 'putClientOwnedConnector',
};

export const tool: Tool = {
  name: 'update_connector_number_2_2_receiver_ocpi_locations',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { connectorID, ...body } = args as any;
  return asBinaryContentResult(
    await client.ocpi.receiver.number2_2.locations.updateConnector(connectorID, body),
  );
};

export default { metadata, tool, handler };
