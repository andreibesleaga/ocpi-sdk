// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22.credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/2.2/credentials',
  operationId: 'postCredentials',
};

export const tool: Tool = {
  name: 'create_v22_ocpi_credentials',
  description: '',
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
    },
    required: ['token', 'roles', 'url'],
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
  annotations: {},
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ocpi.v22.credentials.create(body));
};

export default { metadata, tool, handler };
