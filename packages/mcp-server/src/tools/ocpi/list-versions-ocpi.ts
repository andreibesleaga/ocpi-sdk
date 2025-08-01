// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/versions',
  operationId: 'getVersions',
};

export const tool: Tool = {
  name: 'list_versions_ocpi',
  description:
    'This endpoint lists all the available OCPI versions and the corresponding URLs to where version specific details such as the supported endpoints can be found.',
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
  return asBinaryContentResult(await client.ocpi.listVersions());
};

export default { metadata, tool, handler };
