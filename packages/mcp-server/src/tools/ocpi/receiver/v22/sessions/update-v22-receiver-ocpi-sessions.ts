// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/ocpi/receiver/2.2/sessions/{countryCode}/{partyID}/{sessionID}',
  operationId: 'patchClientOwnedSession',
};

export const tool: Tool = {
  name: 'update_v22_receiver_ocpi_sessions',
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
      sessionID: {
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
    },
    required: [
      'countryCode',
      'partyID',
      'sessionID',
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
  const { sessionID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.sessions.update(sessionID, body));
};

export default { metadata, tool, handler };
