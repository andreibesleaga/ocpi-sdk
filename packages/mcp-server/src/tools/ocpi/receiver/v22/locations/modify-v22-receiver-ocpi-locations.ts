// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.locations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}',
  operationId: 'patchClientOwnedLocation',
};

export const tool: Tool = {
  name: 'modify_v22_receiver_ocpi_locations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      countryCode: {
        type: 'string',
      },
      partyID: {
        type: 'string',
      },
      locationID: {
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { locationID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.locations.modify(locationID, body));
};

export default { metadata, tool, handler };
