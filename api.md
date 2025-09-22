# Ocpi

Methods:

- <code title="get /ocpi/versions">client.ocpi.<a href="./src/resources/ocpi/ocpi.ts">listVersions</a>() -> Response</code>

## V22

Methods:

- <code title="get /ocpi/2.2">client.ocpi.v22.<a href="./src/resources/ocpi/v22/v22.ts">retrieve</a>() -> Response</code>

### Sender

#### Chargingprofiles

Types:

- <code><a href="./src/resources/ocpi/v22/sender/chargingprofiles.ts">ActiveChargingProfile</a></code>
- <code><a href="./src/resources/ocpi/v22/sender/chargingprofiles.ts">ChargingProfile</a></code>
- <code><a href="./src/resources/ocpi/v22/sender/chargingprofiles.ts">ChargingProfilePeriod</a></code>

Methods:

- <code title="put /ocpi/2.2/sender/chargingprofiles/{sessionId}">client.ocpi.v22.sender.chargingprofiles.<a href="./src/resources/ocpi/v22/sender/chargingprofiles.ts">update</a>(sessionID, { ...params }) -> Response</code>
- <code title="post /ocpi/2.2/sender/chargingprofiles/result/{uid}">client.ocpi.v22.sender.chargingprofiles.<a href="./src/resources/ocpi/v22/sender/chargingprofiles.ts">createResult</a>(uid, { ...params }) -> Response</code>

### Receiver

#### Chargingprofiles

Methods:

- <code title="get /ocpi/2.2/receiver/chargingprofiles/{sessionId}">client.ocpi.v22.receiver.chargingprofiles.<a href="./src/resources/ocpi/v22/receiver/chargingprofiles.ts">retrieve</a>(sessionID, { ...params }) -> Response</code>
- <code title="put /ocpi/2.2/receiver/chargingprofiles/{sessionId}">client.ocpi.v22.receiver.chargingprofiles.<a href="./src/resources/ocpi/v22/receiver/chargingprofiles.ts">update</a>(sessionID, { ...params }) -> Response</code>
- <code title="delete /ocpi/2.2/receiver/chargingprofiles/{sessionId}">client.ocpi.v22.receiver.chargingprofiles.<a href="./src/resources/ocpi/v22/receiver/chargingprofiles.ts">delete</a>(sessionID, { ...params }) -> Response</code>

### Credentials

Types:

- <code><a href="./src/resources/ocpi/v22/credentials.ts">Credentials</a></code>

Methods:

- <code title="post /ocpi/2.2/credentials">client.ocpi.v22.credentials.<a href="./src/resources/ocpi/v22/credentials.ts">create</a>({ ...params }) -> Response</code>
- <code title="put /ocpi/2.2/credentials">client.ocpi.v22.credentials.<a href="./src/resources/ocpi/v22/credentials.ts">update</a>({ ...params }) -> Response</code>
- <code title="get /ocpi/2.2/credentials">client.ocpi.v22.credentials.<a href="./src/resources/ocpi/v22/credentials.ts">list</a>() -> Response</code>
- <code title="delete /ocpi/2.2/credentials">client.ocpi.v22.credentials.<a href="./src/resources/ocpi/v22/credentials.ts">delete</a>() -> Response</code>

## Sender

### V22

Types:

- <code><a href="./src/resources/ocpi/sender/v22/v22.ts">DisplayText</a></code>

Methods:

- <code title="post /ocpi/sender/2.2/commands/{command}/{uid}">client.ocpi.sender.v22.<a href="./src/resources/ocpi/sender/v22/v22.ts">update</a>(uid, { ...params }) -> Response</code>

#### Cdrs

Methods:

- <code title="get /ocpi/sender/2.2/cdrs/page/{uid}">client.ocpi.sender.v22.cdrs.<a href="./src/resources/ocpi/sender/v22/cdrs.ts">retrieve</a>(uid, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/cdrs">client.ocpi.sender.v22.cdrs.<a href="./src/resources/ocpi/sender/v22/cdrs.ts">list</a>({ ...params }) -> Response</code>

#### Locations

Methods:

- <code title="get /ocpi/sender/2.2/locations/{locationID}">client.ocpi.sender.v22.locations.<a href="./src/resources/ocpi/sender/v22/locations.ts">retrieve</a>(locationID, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/locations">client.ocpi.sender.v22.locations.<a href="./src/resources/ocpi/sender/v22/locations.ts">list</a>({ ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/locations/{locationID}/{evseUID}">client.ocpi.sender.v22.locations.<a href="./src/resources/ocpi/sender/v22/locations.ts">retrieveEvse</a>(evseUid, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/locations/page/{uid}">client.ocpi.sender.v22.locations.<a href="./src/resources/ocpi/sender/v22/locations.ts">retrievePage</a>(uid, { ...params }) -> Response</code>

#### Sessions

Methods:

- <code title="get /ocpi/sender/2.2/sessions/page/{uid}">client.ocpi.sender.v22.sessions.<a href="./src/resources/ocpi/sender/v22/sessions.ts">retrieve</a>(uid, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/sessions">client.ocpi.sender.v22.sessions.<a href="./src/resources/ocpi/sender/v22/sessions.ts">list</a>({ ...params }) -> Response</code>
- <code title="put /ocpi/sender/2.2/sessions/{sessionID}/charging_preferences">client.ocpi.sender.v22.sessions.<a href="./src/resources/ocpi/sender/v22/sessions.ts">updateChargingPreferences</a>(sessionID, { ...params }) -> Response</code>

#### Tariffs

Methods:

- <code title="get /ocpi/sender/2.2/tariffs/page/{uid}">client.ocpi.sender.v22.tariffs.<a href="./src/resources/ocpi/sender/v22/tariffs.ts">retrieve</a>(uid, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/tariffs">client.ocpi.sender.v22.tariffs.<a href="./src/resources/ocpi/sender/v22/tariffs.ts">list</a>({ ...params }) -> Response</code>

#### Tokens

Methods:

- <code title="get /ocpi/sender/2.2/tokens/page/{uid}">client.ocpi.sender.v22.tokens.<a href="./src/resources/ocpi/sender/v22/tokens.ts">retrieve</a>(uid, { ...params }) -> Response</code>
- <code title="get /ocpi/sender/2.2/tokens">client.ocpi.sender.v22.tokens.<a href="./src/resources/ocpi/sender/v22/tokens.ts">list</a>({ ...params }) -> Response</code>
- <code title="post /ocpi/sender/2.2/tokens/{tokenUID}/authorize">client.ocpi.sender.v22.tokens.<a href="./src/resources/ocpi/sender/v22/tokens.ts">authorize</a>(tokenUid, { ...params }) -> Response</code>

## Receiver

### V22

#### Cdrs

Types:

- <code><a href="./src/resources/ocpi/receiver/v22/cdrs.ts">CdrToken</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/cdrs.ts">ChargingPeriod</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/cdrs.ts">Price</a></code>

Methods:

- <code title="post /ocpi/receiver/2.2/cdrs">client.ocpi.receiver.v22.cdrs.<a href="./src/resources/ocpi/receiver/v22/cdrs.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /ocpi/receiver/2.2/cdrs/{cdrID}">client.ocpi.receiver.v22.cdrs.<a href="./src/resources/ocpi/receiver/v22/cdrs.ts">retrieve</a>(cdrID, { ...params }) -> Response</code>

#### Commands

Methods:

- <code title="post /ocpi/receiver/2.2/commands/CANCEL_RESERVATION">client.ocpi.receiver.v22.commands.<a href="./src/resources/ocpi/receiver/v22/commands.ts">cancelReservation</a>({ ...params }) -> Response</code>
- <code title="post /ocpi/receiver/2.2/commands/RESERVE_NOW">client.ocpi.receiver.v22.commands.<a href="./src/resources/ocpi/receiver/v22/commands.ts">reserveNow</a>({ ...params }) -> Response</code>
- <code title="post /ocpi/receiver/2.2/commands/START_SESSION">client.ocpi.receiver.v22.commands.<a href="./src/resources/ocpi/receiver/v22/commands.ts">startSession</a>({ ...params }) -> Response</code>
- <code title="post /ocpi/receiver/2.2/commands/STOP_SESSION">client.ocpi.receiver.v22.commands.<a href="./src/resources/ocpi/receiver/v22/commands.ts">stopSession</a>({ ...params }) -> Response</code>
- <code title="post /ocpi/receiver/2.2/commands/UNLOCK_CONNECTOR">client.ocpi.receiver.v22.commands.<a href="./src/resources/ocpi/receiver/v22/commands.ts">unlockConnector</a>({ ...params }) -> Response</code>

#### Locations

Types:

- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">BusinessDetails</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">Connector</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">EnergyMix</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">EnergySource</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">EnvironmentalImpact</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">Evse</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">ExceptionalPeriod</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">GeoLocation</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/locations.ts">Image</a></code>

Methods:

- <code title="get /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">retrieve</a>(locationID, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">update</a>(locationID, { ...params }) -> Response</code>
- <code title="patch /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">modify</a>(locationID, { ...params }) -> Response</code>
- <code title="patch /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">modifyEvse</a>(evseUid, { ...params }) -> Response</code>
- <code title="get /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">retrieveEvse</a>(evseUid, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}/{connectorID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">updateConnector</a>(connectorID, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/locations/{countryCode}/{partyID}/{locationID}/{evseUID}">client.ocpi.receiver.v22.locations.<a href="./src/resources/ocpi/receiver/v22/locations.ts">updateEvse</a>(evseUid, { ...params }) -> Response</code>

#### Sessions

Methods:

- <code title="get /ocpi/receiver/2.2/sessions/{countryCode}/{partyID}/{sessionID}">client.ocpi.receiver.v22.sessions.<a href="./src/resources/ocpi/receiver/v22/sessions.ts">retrieve</a>(sessionID, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/sessions/{countryCode}/{partyID}/{sessionID}">client.ocpi.receiver.v22.sessions.<a href="./src/resources/ocpi/receiver/v22/sessions.ts">update</a>(sessionID, { ...params }) -> Response</code>

#### Tariffs

Types:

- <code><a href="./src/resources/ocpi/receiver/v22/tariffs.ts">Tariff</a></code>

Methods:

- <code title="get /ocpi/receiver/2.2/tariffs/{countryCode}/{partyID}/{tariffID}">client.ocpi.receiver.v22.tariffs.<a href="./src/resources/ocpi/receiver/v22/tariffs.ts">retrieve</a>(tariffID, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/tariffs/{countryCode}/{partyID}/{tariffID}">client.ocpi.receiver.v22.tariffs.<a href="./src/resources/ocpi/receiver/v22/tariffs.ts">update</a>(tariffID, { ...params }) -> Response</code>
- <code title="delete /ocpi/receiver/2.2/tariffs/{countryCode}/{partyID}/{tariffID}">client.ocpi.receiver.v22.tariffs.<a href="./src/resources/ocpi/receiver/v22/tariffs.ts">delete</a>(tariffID, { ...params }) -> Response</code>

#### Tokens

Types:

- <code><a href="./src/resources/ocpi/receiver/v22/tokens.ts">EnergyContract</a></code>
- <code><a href="./src/resources/ocpi/receiver/v22/tokens.ts">Token</a></code>

Methods:

- <code title="get /ocpi/receiver/2.2/tokens/{countryCode}/{partyID}/{tokenUID}">client.ocpi.receiver.v22.tokens.<a href="./src/resources/ocpi/receiver/v22/tokens.ts">retrieve</a>(tokenUid, { ...params }) -> Response</code>
- <code title="put /ocpi/receiver/2.2/tokens/{countryCode}/{partyID}/{tokenUID}">client.ocpi.receiver.v22.tokens.<a href="./src/resources/ocpi/receiver/v22/tokens.ts">update</a>(tokenUid, { ...params }) -> Response</code>
