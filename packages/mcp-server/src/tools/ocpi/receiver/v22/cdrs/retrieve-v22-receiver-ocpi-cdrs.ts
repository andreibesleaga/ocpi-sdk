// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.cdrs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/receiver/2.2/cdrs/{cdrID}',
  operationId: 'getClientOwnedCdr',
};

export const tool: Tool = {
  name: 'retrieve_v22_receiver_ocpi_cdrs',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      cdrID: {
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
      'cdrID',
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
  const { cdrID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.cdrs.retrieve(cdrID, body));
};

export default { metadata, tool, handler };
