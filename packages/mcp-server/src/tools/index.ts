// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import list_versions_ocpi from './ocpi/list-versions-ocpi';
import retrieve_ocpi_v22 from './ocpi/v22/retrieve-ocpi-v22';
import update_sender_v22_ocpi_chargingprofiles from './ocpi/v22/sender/chargingprofiles/update-sender-v22-ocpi-chargingprofiles';
import create_result_sender_v22_ocpi_chargingprofiles from './ocpi/v22/sender/chargingprofiles/create-result-sender-v22-ocpi-chargingprofiles';
import retrieve_receiver_v22_ocpi_chargingprofiles from './ocpi/v22/receiver/chargingprofiles/retrieve-receiver-v22-ocpi-chargingprofiles';
import update_receiver_v22_ocpi_chargingprofiles from './ocpi/v22/receiver/chargingprofiles/update-receiver-v22-ocpi-chargingprofiles';
import delete_receiver_v22_ocpi_chargingprofiles from './ocpi/v22/receiver/chargingprofiles/delete-receiver-v22-ocpi-chargingprofiles';
import create_v22_ocpi_credentials from './ocpi/v22/credentials/create-v22-ocpi-credentials';
import update_v22_ocpi_credentials from './ocpi/v22/credentials/update-v22-ocpi-credentials';
import list_v22_ocpi_credentials from './ocpi/v22/credentials/list-v22-ocpi-credentials';
import delete_v22_ocpi_credentials from './ocpi/v22/credentials/delete-v22-ocpi-credentials';
import update_sender_ocpi_v22 from './ocpi/sender/v22/update-sender-ocpi-v22';
import retrieve_v22_sender_ocpi_cdrs from './ocpi/sender/v22/cdrs/retrieve-v22-sender-ocpi-cdrs';
import list_v22_sender_ocpi_cdrs from './ocpi/sender/v22/cdrs/list-v22-sender-ocpi-cdrs';
import retrieve_v22_sender_ocpi_locations from './ocpi/sender/v22/locations/retrieve-v22-sender-ocpi-locations';
import list_v22_sender_ocpi_locations from './ocpi/sender/v22/locations/list-v22-sender-ocpi-locations';
import retrieve_evse_v22_sender_ocpi_locations from './ocpi/sender/v22/locations/retrieve-evse-v22-sender-ocpi-locations';
import retrieve_page_v22_sender_ocpi_locations from './ocpi/sender/v22/locations/retrieve-page-v22-sender-ocpi-locations';
import retrieve_v22_sender_ocpi_sessions from './ocpi/sender/v22/sessions/retrieve-v22-sender-ocpi-sessions';
import list_v22_sender_ocpi_sessions from './ocpi/sender/v22/sessions/list-v22-sender-ocpi-sessions';
import update_charging_preferences_v22_sender_ocpi_sessions from './ocpi/sender/v22/sessions/update-charging-preferences-v22-sender-ocpi-sessions';
import retrieve_v22_sender_ocpi_tariffs from './ocpi/sender/v22/tariffs/retrieve-v22-sender-ocpi-tariffs';
import list_v22_sender_ocpi_tariffs from './ocpi/sender/v22/tariffs/list-v22-sender-ocpi-tariffs';
import retrieve_v22_sender_ocpi_tokens from './ocpi/sender/v22/tokens/retrieve-v22-sender-ocpi-tokens';
import list_v22_sender_ocpi_tokens from './ocpi/sender/v22/tokens/list-v22-sender-ocpi-tokens';
import authorize_v22_sender_ocpi_tokens from './ocpi/sender/v22/tokens/authorize-v22-sender-ocpi-tokens';
import create_v22_receiver_ocpi_cdrs from './ocpi/receiver/v22/cdrs/create-v22-receiver-ocpi-cdrs';
import retrieve_v22_receiver_ocpi_cdrs from './ocpi/receiver/v22/cdrs/retrieve-v22-receiver-ocpi-cdrs';
import cancel_reservation_v22_receiver_ocpi_commands from './ocpi/receiver/v22/commands/cancel-reservation-v22-receiver-ocpi-commands';
import reserve_now_v22_receiver_ocpi_commands from './ocpi/receiver/v22/commands/reserve-now-v22-receiver-ocpi-commands';
import start_session_v22_receiver_ocpi_commands from './ocpi/receiver/v22/commands/start-session-v22-receiver-ocpi-commands';
import stop_session_v22_receiver_ocpi_commands from './ocpi/receiver/v22/commands/stop-session-v22-receiver-ocpi-commands';
import unlock_connector_v22_receiver_ocpi_commands from './ocpi/receiver/v22/commands/unlock-connector-v22-receiver-ocpi-commands';
import retrieve_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/retrieve-v22-receiver-ocpi-locations';
import update_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/update-v22-receiver-ocpi-locations';
import modify_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/modify-v22-receiver-ocpi-locations';
import modify_evse_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/modify-evse-v22-receiver-ocpi-locations';
import retrieve_evse_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/retrieve-evse-v22-receiver-ocpi-locations';
import update_connector_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/update-connector-v22-receiver-ocpi-locations';
import update_evse_v22_receiver_ocpi_locations from './ocpi/receiver/v22/locations/update-evse-v22-receiver-ocpi-locations';
import retrieve_v22_receiver_ocpi_sessions from './ocpi/receiver/v22/sessions/retrieve-v22-receiver-ocpi-sessions';
import update_v22_receiver_ocpi_sessions from './ocpi/receiver/v22/sessions/update-v22-receiver-ocpi-sessions';
import retrieve_v22_receiver_ocpi_tariffs from './ocpi/receiver/v22/tariffs/retrieve-v22-receiver-ocpi-tariffs';
import update_v22_receiver_ocpi_tariffs from './ocpi/receiver/v22/tariffs/update-v22-receiver-ocpi-tariffs';
import delete_v22_receiver_ocpi_tariffs from './ocpi/receiver/v22/tariffs/delete-v22-receiver-ocpi-tariffs';
import retrieve_v22_receiver_ocpi_tokens from './ocpi/receiver/v22/tokens/retrieve-v22-receiver-ocpi-tokens';
import update_v22_receiver_ocpi_tokens from './ocpi/receiver/v22/tokens/update-v22-receiver-ocpi-tokens';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_versions_ocpi);
addEndpoint(retrieve_ocpi_v22);
addEndpoint(update_sender_v22_ocpi_chargingprofiles);
addEndpoint(create_result_sender_v22_ocpi_chargingprofiles);
addEndpoint(retrieve_receiver_v22_ocpi_chargingprofiles);
addEndpoint(update_receiver_v22_ocpi_chargingprofiles);
addEndpoint(delete_receiver_v22_ocpi_chargingprofiles);
addEndpoint(create_v22_ocpi_credentials);
addEndpoint(update_v22_ocpi_credentials);
addEndpoint(list_v22_ocpi_credentials);
addEndpoint(delete_v22_ocpi_credentials);
addEndpoint(update_sender_ocpi_v22);
addEndpoint(retrieve_v22_sender_ocpi_cdrs);
addEndpoint(list_v22_sender_ocpi_cdrs);
addEndpoint(retrieve_v22_sender_ocpi_locations);
addEndpoint(list_v22_sender_ocpi_locations);
addEndpoint(retrieve_evse_v22_sender_ocpi_locations);
addEndpoint(retrieve_page_v22_sender_ocpi_locations);
addEndpoint(retrieve_v22_sender_ocpi_sessions);
addEndpoint(list_v22_sender_ocpi_sessions);
addEndpoint(update_charging_preferences_v22_sender_ocpi_sessions);
addEndpoint(retrieve_v22_sender_ocpi_tariffs);
addEndpoint(list_v22_sender_ocpi_tariffs);
addEndpoint(retrieve_v22_sender_ocpi_tokens);
addEndpoint(list_v22_sender_ocpi_tokens);
addEndpoint(authorize_v22_sender_ocpi_tokens);
addEndpoint(create_v22_receiver_ocpi_cdrs);
addEndpoint(retrieve_v22_receiver_ocpi_cdrs);
addEndpoint(cancel_reservation_v22_receiver_ocpi_commands);
addEndpoint(reserve_now_v22_receiver_ocpi_commands);
addEndpoint(start_session_v22_receiver_ocpi_commands);
addEndpoint(stop_session_v22_receiver_ocpi_commands);
addEndpoint(unlock_connector_v22_receiver_ocpi_commands);
addEndpoint(retrieve_v22_receiver_ocpi_locations);
addEndpoint(update_v22_receiver_ocpi_locations);
addEndpoint(modify_v22_receiver_ocpi_locations);
addEndpoint(modify_evse_v22_receiver_ocpi_locations);
addEndpoint(retrieve_evse_v22_receiver_ocpi_locations);
addEndpoint(update_connector_v22_receiver_ocpi_locations);
addEndpoint(update_evse_v22_receiver_ocpi_locations);
addEndpoint(retrieve_v22_receiver_ocpi_sessions);
addEndpoint(update_v22_receiver_ocpi_sessions);
addEndpoint(retrieve_v22_receiver_ocpi_tariffs);
addEndpoint(update_v22_receiver_ocpi_tariffs);
addEndpoint(delete_v22_receiver_ocpi_tariffs);
addEndpoint(retrieve_v22_receiver_ocpi_tokens);
addEndpoint(update_v22_receiver_ocpi_tokens);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
