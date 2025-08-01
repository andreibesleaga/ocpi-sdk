// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/ocpi/receiver/2.2/tokens/{countryCode}/{partyID}/{tokenUID}',
  operationId: 'patchClientOwnedToken',
};

export const tool: Tool = {
  name: 'update_v22_receiver_ocpi_tokens',
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
      tokenUID: {
        type: 'string',
      },
      body: {
        type: 'object',
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
    },
    required: [
      'countryCode',
      'partyID',
      'tokenUID',
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
  const { tokenUID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.tokens.update(tokenUID, body));
};

export default { metadata, tool, handler };
