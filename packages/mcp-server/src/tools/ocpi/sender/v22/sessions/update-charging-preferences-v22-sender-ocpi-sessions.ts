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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { sessionID, ...body } = args as any;
  return asBinaryContentResult(
    await client.ocpi.sender.v22.sessions.updateChargingPreferences(sessionID, body),
  );
};

export default { metadata, tool, handler };
