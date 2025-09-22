// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.sender.v22.locations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/sender/2.2/locations/{locationID}/{evseUID}/{connectorID}',
  operationId: 'getConnectorObjectFromDataOwner',
};

export const tool: Tool = {
  name: 'retrieve_v22_sender_ocpi_locations',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      locationID: {
        type: 'string',
      },
      evseUID: {
        type: 'string',
      },
      connectorID: {
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
    },
    required: [
      'locationID',
      'evseUID',
      'connectorID',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { connectorID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.sender.v22.locations.retrieve(connectorID, body));
};

export default { metadata, tool, handler };
