// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}/{connectorID}',
  operationId: 'patchClientOwnedConnector',
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
      evseUID: {
        type: 'string',
      },
      connectorID: {
        type: 'string',
      },
      body: {
        type: 'object',
        additionalProperties: true,
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
    },
    required: [
      'countryCode',
      'partyID',
      'locationID',
      'evseUID',
      'connectorID',
      'body',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
  },
  annotations: {},
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { connectorID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.locations.update(connectorID, body));
};

export default { metadata, tool, handler };
