// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/receiver/2.2/commands/UNLOCK_CONNECTOR',
  operationId: 'postUnlockConnector',
};

export const tool: Tool = {
  name: 'unlock_connector_v22_receiver_ocpi_commands',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      connector_id: {
        type: 'string',
      },
      evse_uid: {
        type: 'string',
      },
      location_id: {
        type: 'string',
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
      'connector_id',
      'evse_uid',
      'location_id',
      'response_url',
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
  const body = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.commands.unlockConnector(body));
};

export default { metadata, tool, handler };
