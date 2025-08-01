// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.sender.v22.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/sender/2.2/sessions/{sessionID}/charging_preferences',
  operationId: 'putChargingPreferences',
};

export const tool: Tool = {
  name: 'update_charging_preferences_v22_sender_ocpi_sessions',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      sessionID: {
        type: 'string',
      },
      profile_type: {
        type: 'string',
        enum: ['CHEAP', 'FAST', 'GREEN', 'REGULAR'],
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
      departure_time: {
        type: 'string',
      },
      discharge_allowed: {
        type: 'boolean',
      },
      energy_need: {
        type: 'number',
      },
    },
    required: [
      'sessionID',
      'profile_type',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { sessionID, ...body } = args as any;
  return asBinaryContentResult(
    await client.ocpi.sender.v22.sessions.updateChargingPreferences(sessionID, body),
  );
};

export default { metadata, tool, handler };
