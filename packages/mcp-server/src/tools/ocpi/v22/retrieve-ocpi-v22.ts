// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/2.2',
  operationId: 'getVersion',
};

export const tool: Tool = {
  name: 'retrieve_ocpi_v22',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  return asBinaryContentResult(await client.ocpi.v22.retrieve());
};

export default { metadata, tool, handler };
