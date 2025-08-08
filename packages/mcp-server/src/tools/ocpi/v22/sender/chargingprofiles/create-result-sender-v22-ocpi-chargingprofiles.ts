// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'ocpi-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import OcpiSDK from 'ocpi-sdk';

export const metadata: Metadata = {
  resource: 'ocpi.v22.sender.chargingprofiles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ocpi/2.2/sender/chargingprofiles/result/{uid}',
  operationId: 'postGenericChargingProfileResult',
};

export const tool: Tool = {
  name: 'create_result_sender_v22_ocpi_chargingprofiles',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      result: {
        type: 'string',
        enum: ['ACCEPTED', 'REJECTED', 'UNKNOWN'],
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
      profile: {
        $ref: '#/$defs/active_charging_profile',
      },
    },
    required: [
      'uid',
      'result',
      'OCPI-from-country-code',
      'OCPI-from-party-id',
      'OCPI-to-country-code',
      'OCPI-to-party-id',
      'X-Correlation-ID',
      'X-Request-ID',
    ],
    $defs: {
      active_charging_profile: {
        type: 'object',
        properties: {
          charging_profile: {
            $ref: '#/$defs/charging_profile',
          },
          start_date_time: {
            type: 'string',
          },
        },
        required: ['charging_profile', 'start_date_time'],
      },
      charging_profile: {
        type: 'object',
        properties: {
          charging_rate_unit: {
            type: 'string',
            enum: ['W', 'A'],
          },
          charging_profile_period: {
            type: 'array',
            items: {
              $ref: '#/$defs/charging_profile_period',
            },
          },
          duration: {
            type: 'integer',
          },
          min_charging_rate: {
            type: 'number',
          },
          start_date_time: {
            type: 'string',
          },
        },
        required: ['charging_rate_unit'],
      },
      charging_profile_period: {
        type: 'object',
        properties: {
          limit: {
            type: 'number',
          },
          start_period: {
            type: 'integer',
          },
        },
        required: ['limit', 'start_period'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: OcpiSDK, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  return asBinaryContentResult(await client.ocpi.v22.sender.chargingprofiles.createResult(uid, body));
};

export default { metadata, tool, handler };
