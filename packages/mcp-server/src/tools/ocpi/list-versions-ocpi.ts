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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint lists all the available OCPI versions and the corresponding URLs to where version specific details such as the supported endpoints can be found.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  return asBinaryContentResult(await client.ocpi.listVersions());
};

export default { metadata, tool, handler };
