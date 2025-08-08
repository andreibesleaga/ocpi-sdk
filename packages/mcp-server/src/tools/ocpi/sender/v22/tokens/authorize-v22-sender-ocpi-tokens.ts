// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.sender.v22.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/sender/2.2/tokens/{tokenUID}/authorize',
  operationId: 'postRealTimeTokenAuthorization',
};

export const tool: Tool = {
  name: 'authorize_v22_sender_ocpi_tokens',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      tokenUID: {
        type: 'string',
      },
      location_id: {
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
      type: {
        type: 'string',
        enum: ['AD_HOC_USER', 'APP_USER', 'OTHER', 'RFID'],
      },
      connector_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      evse_uids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: [
      'tokenUID',
      'location_id',
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
  const { tokenUID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.sender.v22.tokens.authorize(tokenUID, body));
};

export default { metadata, tool, handler };
