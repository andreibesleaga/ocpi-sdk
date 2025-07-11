// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import list_versions_ocpi from './ocpi/list-versions-ocpi';
import retrieve_ocpi_number_2_2 from './ocpi/number-2-2/retrieve-ocpi-number-2-2';
import update_sender_number_2_2_ocpi_chargingprofiles from './ocpi/number-2-2/sender/chargingprofiles/update-sender-number-2-2-ocpi-chargingprofiles';
import create_result_sender_number_2_2_ocpi_chargingprofiles from './ocpi/number-2-2/sender/chargingprofiles/create-result-sender-number-2-2-ocpi-chargingprofiles';
import retrieve_receiver_number_2_2_ocpi_chargingprofiles from './ocpi/number-2-2/receiver/chargingprofiles/retrieve-receiver-number-2-2-ocpi-chargingprofiles';
import update_receiver_number_2_2_ocpi_chargingprofiles from './ocpi/number-2-2/receiver/chargingprofiles/update-receiver-number-2-2-ocpi-chargingprofiles';
import delete_receiver_number_2_2_ocpi_chargingprofiles from './ocpi/number-2-2/receiver/chargingprofiles/delete-receiver-number-2-2-ocpi-chargingprofiles';
import create_number_2_2_ocpi_credentials from './ocpi/number-2-2/credentials/create-number-2-2-ocpi-credentials';
import update_number_2_2_ocpi_credentials from './ocpi/number-2-2/credentials/update-number-2-2-ocpi-credentials';
import list_number_2_2_ocpi_credentials from './ocpi/number-2-2/credentials/list-number-2-2-ocpi-credentials';
import delete_number_2_2_ocpi_credentials from './ocpi/number-2-2/credentials/delete-number-2-2-ocpi-credentials';
import update_sender_ocpi_number_2_2 from './ocpi/sender/number-2-2/update-sender-ocpi-number-2-2';
import retrieve_number_2_2_sender_ocpi_cdrs from './ocpi/sender/number-2-2/cdrs/retrieve-number-2-2-sender-ocpi-cdrs';
import list_number_2_2_sender_ocpi_cdrs from './ocpi/sender/number-2-2/cdrs/list-number-2-2-sender-ocpi-cdrs';
import retrieve_number_2_2_sender_ocpi_locations from './ocpi/sender/number-2-2/locations/retrieve-number-2-2-sender-ocpi-locations';
import list_number_2_2_sender_ocpi_locations from './ocpi/sender/number-2-2/locations/list-number-2-2-sender-ocpi-locations';
import retrieve_number_2_2_sender_ocpi_sessions from './ocpi/sender/number-2-2/sessions/retrieve-number-2-2-sender-ocpi-sessions';
import list_number_2_2_sender_ocpi_sessions from './ocpi/sender/number-2-2/sessions/list-number-2-2-sender-ocpi-sessions';
import update_charging_preferences_number_2_2_sender_ocpi_sessions from './ocpi/sender/number-2-2/sessions/update-charging-preferences-number-2-2-sender-ocpi-sessions';
import retrieve_number_2_2_sender_ocpi_tariffs from './ocpi/sender/number-2-2/tariffs/retrieve-number-2-2-sender-ocpi-tariffs';
import list_number_2_2_sender_ocpi_tariffs from './ocpi/sender/number-2-2/tariffs/list-number-2-2-sender-ocpi-tariffs';
import retrieve_number_2_2_sender_ocpi_tokens from './ocpi/sender/number-2-2/tokens/retrieve-number-2-2-sender-ocpi-tokens';
import list_number_2_2_sender_ocpi_tokens from './ocpi/sender/number-2-2/tokens/list-number-2-2-sender-ocpi-tokens';
import authorize_number_2_2_sender_ocpi_tokens from './ocpi/sender/number-2-2/tokens/authorize-number-2-2-sender-ocpi-tokens';
import create_number_2_2_receiver_ocpi_cdrs from './ocpi/receiver/number-2-2/cdrs/create-number-2-2-receiver-ocpi-cdrs';
import retrieve_number_2_2_receiver_ocpi_cdrs from './ocpi/receiver/number-2-2/cdrs/retrieve-number-2-2-receiver-ocpi-cdrs';
import cancel_reservation_number_2_2_receiver_ocpi_commands from './ocpi/receiver/number-2-2/commands/cancel-reservation-number-2-2-receiver-ocpi-commands';
import reserve_now_number_2_2_receiver_ocpi_commands from './ocpi/receiver/number-2-2/commands/reserve-now-number-2-2-receiver-ocpi-commands';
import start_session_number_2_2_receiver_ocpi_commands from './ocpi/receiver/number-2-2/commands/start-session-number-2-2-receiver-ocpi-commands';
import stop_session_number_2_2_receiver_ocpi_commands from './ocpi/receiver/number-2-2/commands/stop-session-number-2-2-receiver-ocpi-commands';
import unlock_connector_number_2_2_receiver_ocpi_commands from './ocpi/receiver/number-2-2/commands/unlock-connector-number-2-2-receiver-ocpi-commands';
import retrieve_number_2_2_receiver_ocpi_locations from './ocpi/receiver/number-2-2/locations/retrieve-number-2-2-receiver-ocpi-locations';
import update_number_2_2_receiver_ocpi_locations from './ocpi/receiver/number-2-2/locations/update-number-2-2-receiver-ocpi-locations';
import retrieve_number_2_2_receiver_ocpi_sessions from './ocpi/receiver/number-2-2/sessions/retrieve-number-2-2-receiver-ocpi-sessions';
import update_number_2_2_receiver_ocpi_sessions from './ocpi/receiver/number-2-2/sessions/update-number-2-2-receiver-ocpi-sessions';
import retrieve_number_2_2_receiver_ocpi_tariffs from './ocpi/receiver/number-2-2/tariffs/retrieve-number-2-2-receiver-ocpi-tariffs';
import update_number_2_2_receiver_ocpi_tariffs from './ocpi/receiver/number-2-2/tariffs/update-number-2-2-receiver-ocpi-tariffs';
import delete_number_2_2_receiver_ocpi_tariffs from './ocpi/receiver/number-2-2/tariffs/delete-number-2-2-receiver-ocpi-tariffs';
import retrieve_number_2_2_receiver_ocpi_tokens from './ocpi/receiver/number-2-2/tokens/retrieve-number-2-2-receiver-ocpi-tokens';
import update_number_2_2_receiver_ocpi_tokens from './ocpi/receiver/number-2-2/tokens/update-number-2-2-receiver-ocpi-tokens';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_versions_ocpi);
addEndpoint(retrieve_ocpi_number_2_2);
addEndpoint(update_sender_number_2_2_ocpi_chargingprofiles);
addEndpoint(create_result_sender_number_2_2_ocpi_chargingprofiles);
addEndpoint(retrieve_receiver_number_2_2_ocpi_chargingprofiles);
addEndpoint(update_receiver_number_2_2_ocpi_chargingprofiles);
addEndpoint(delete_receiver_number_2_2_ocpi_chargingprofiles);
addEndpoint(create_number_2_2_ocpi_credentials);
addEndpoint(update_number_2_2_ocpi_credentials);
addEndpoint(list_number_2_2_ocpi_credentials);
addEndpoint(delete_number_2_2_ocpi_credentials);
addEndpoint(update_sender_ocpi_number_2_2);
addEndpoint(retrieve_number_2_2_sender_ocpi_cdrs);
addEndpoint(list_number_2_2_sender_ocpi_cdrs);
addEndpoint(retrieve_number_2_2_sender_ocpi_locations);
addEndpoint(list_number_2_2_sender_ocpi_locations);
addEndpoint(retrieve_number_2_2_sender_ocpi_sessions);
addEndpoint(list_number_2_2_sender_ocpi_sessions);
addEndpoint(update_charging_preferences_number_2_2_sender_ocpi_sessions);
addEndpoint(retrieve_number_2_2_sender_ocpi_tariffs);
addEndpoint(list_number_2_2_sender_ocpi_tariffs);
addEndpoint(retrieve_number_2_2_sender_ocpi_tokens);
addEndpoint(list_number_2_2_sender_ocpi_tokens);
addEndpoint(authorize_number_2_2_sender_ocpi_tokens);
addEndpoint(create_number_2_2_receiver_ocpi_cdrs);
addEndpoint(retrieve_number_2_2_receiver_ocpi_cdrs);
addEndpoint(cancel_reservation_number_2_2_receiver_ocpi_commands);
addEndpoint(reserve_now_number_2_2_receiver_ocpi_commands);
addEndpoint(start_session_number_2_2_receiver_ocpi_commands);
addEndpoint(stop_session_number_2_2_receiver_ocpi_commands);
addEndpoint(unlock_connector_number_2_2_receiver_ocpi_commands);
addEndpoint(retrieve_number_2_2_receiver_ocpi_locations);
addEndpoint(update_number_2_2_receiver_ocpi_locations);
addEndpoint(retrieve_number_2_2_receiver_ocpi_sessions);
addEndpoint(update_number_2_2_receiver_ocpi_sessions);
addEndpoint(retrieve_number_2_2_receiver_ocpi_tariffs);
addEndpoint(update_number_2_2_receiver_ocpi_tariffs);
addEndpoint(delete_number_2_2_receiver_ocpi_tariffs);
addEndpoint(retrieve_number_2_2_receiver_ocpi_tokens);
addEndpoint(update_number_2_2_receiver_ocpi_tokens);

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
