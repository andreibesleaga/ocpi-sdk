// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22.credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/2.2/credentials',
  operationId: 'putCredentials',
};

export const tool: Tool = {
  name: 'update_v22_ocpi_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
      },
      roles: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            business_details: {
              $ref: '#/$defs/business_details',
            },
            country_code: {
              type: 'string',
            },
            party_id: {
              type: 'string',
            },
            role: {
              type: 'string',
              enum: ['CPO', 'EMSP', 'HUB', 'NAP', 'NSP', 'OTHER', 'SCSP'],
            },
          },
          required: ['business_details', 'country_code', 'party_id', 'role'],
        },
      },
      url: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
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
    },
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ocpi.v22.credentials.update(body));
};

export default { metadata, tool, handler };
