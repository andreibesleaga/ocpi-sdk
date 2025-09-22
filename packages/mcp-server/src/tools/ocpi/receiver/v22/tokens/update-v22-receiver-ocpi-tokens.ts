// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ocpi/receiver/2.2/tokens/{countryCode}/{partyID}/{tokenUID}',
  operationId: 'putClientOwnedToken',
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
      body_type: {
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
      query_type: {
        type: 'string',
        enum: ['AD_HOC_USER', 'APP_USER', 'OTHER', 'RFID'],
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
    },
    required: [
      'countryCode',
      'partyID',
      'tokenUID',
      'contract_id',
      'country_code',
      'issuer',
      'last_updated',
      'party_id',
      'body_type',
      'uid',
      'valid',
      'whitelist',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { tokenUID, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.tokens.update(tokenUID, body));
};

export default { metadata, tool, handler };
