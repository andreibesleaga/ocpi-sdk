// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22.receiver.chargingprofiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ocpi/2.2/receiver/chargingprofiles/{sessionId}',
  operationId: 'getReceiverChargingProfile',
};

export const tool: Tool = {
  name: 'retrieve_receiver_v22_ocpi_chargingprofiles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      duration: {
        type: 'integer',
      },
      response_url: {
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
      'sessionId',
      'duration',
      'response_url',
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
  const { sessionId, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.v22.receiver.chargingprofiles.retrieve(sessionId, body));
};

export default { metadata, tool, handler };
