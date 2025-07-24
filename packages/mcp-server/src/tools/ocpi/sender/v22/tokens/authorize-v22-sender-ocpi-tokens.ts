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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
