// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.sender.v22',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/sender/2.2/commands/{command}/{uid}',
  operationId: 'postAsyncResponse',
};

export const tool: Tool = {
  name: 'update_sender_ocpi_v22',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      command: {
        type: 'string',
        enum: ['CANCEL_RESERVATION', 'RESERVE_NOW', 'START_SESSION', 'STOP_SESSION', 'UNLOCK_CONNECTOR'],
      },
      uid: {
        type: 'string',
      },
      result: {
        type: 'string',
        enum: [
          'ACCEPTED',
          'CANCELED_RESERVATION',
          'EVSE_OCCUPIED',
          'EVSE_INOPERATIVE',
          'FAILED',
          'NOT_SUPPORTED',
          'REJECTED',
          'TIMEOUT',
          'UNKNOWN_RESERVATION',
        ],
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
      message: {
        $ref: '#/$defs/display_text',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      display_text: {
        type: 'object',
        properties: {
          language: {
            type: 'string',
          },
          text: {
            type: 'string',
          },
        },
        required: ['language', 'text'],
      },
    },
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.sender.v22.update(uid, body));
};

export default { metadata, tool, handler };
