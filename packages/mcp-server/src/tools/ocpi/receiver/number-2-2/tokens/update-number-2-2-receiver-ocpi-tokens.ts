// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.number_2_2.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/tokens/{countryCode}/{partyID}/{tokenUID}',
  operationId: 'putClientOwnedToken',
};

export const tool: Tool = {
  name: 'update_number_2_2_receiver_ocpi_tokens',
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
      tokenUID: {
        type: 'string',
      },
      contract_id: {
        type: 'string',
      },
      country_code: {
        type: 'string',
      },
      issuer: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
      },
      party_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['AD_HOC_USER', 'APP_USER', 'OTHER', 'RFID'],
      },
      uid: {
        type: 'string',
      },
      valid: {
        type: 'boolean',
      },
      whitelist: {
        type: 'string',
        enum: ['ALWAYS', 'ALLOWED', 'ALLOWED_OFFLINE', 'NEVER'],
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
      default_profile_type: {
        type: 'string',
        enum: ['CHEAP', 'FAST', 'GREEN', 'REGULAR'],
      },
      energy_contract: {
        $ref: '#/$defs/energy_contract',
      },
      group_id: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
      visual_number: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      energy_contract: {
        type: 'object',
        properties: {
          supplier_name: {
            type: 'string',
          },
          contract_id: {
            type: 'string',
          },
        },
        required: ['supplier_name'],
      },
    },
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { tokenUID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.number2_2.tokens.update(tokenUID, body));
};

export default { metadata, tool, handler };
