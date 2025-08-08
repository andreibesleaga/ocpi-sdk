// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22.credentials',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/2.2/credentials',
  operationId: 'getCredentials',
};

export const tool: Tool = {
  name: 'list_v22_ocpi_credentials',
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
  return asBinaryContentResult(await client.ocpi.v22.credentials.list());
};

export default { metadata, tool, handler };
