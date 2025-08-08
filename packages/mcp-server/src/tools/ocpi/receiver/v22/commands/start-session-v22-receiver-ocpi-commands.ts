// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.receiver.v22.commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/receiver/2.2/commands/START_SESSION',
  operationId: 'postStartSession',
};

export const tool: Tool = {
  name: 'start_session_v22_receiver_ocpi_commands',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        $ref: '#/$defs/token',
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
      authorization_reference: {
        type: 'string',
      },
      evse_uid: {
        type: 'string',
      },
    },
    required: [
      'token',
      'location_id',
      'response_url',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
    $defs: {
      token: {
        type: 'object',
        properties: {
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
          'contract_id',
          'country_code',
          'issuer',
          'last_updated',
          'party_id',
          'type',
          'uid',
          'valid',
          'whitelist',
        ],
      },
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
  annotations: {},
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.ocpi.receiver.v22.commands.startSession(body));
};

export default { metadata, tool, handler };
