# OCPI SDK TypeScript MCP Server

A Model Context Protocol (MCP) server implementation for OCPI (Open Charging Point Interface) services, enabling AI assistants to interact with EV charging infrastructure.

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export OCPI_SDK_API_KEY="My API Key"
npx -y ocpi-sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "ocpi_sdk_api": {
      "command": "npx",
      "args": ["-y", "ocpi-sdk-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "OCPI_SDK_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "ocpi-sdk-mcp/server";

// import a specific tool
import listVersionsOcpi from "ocpi-sdk-mcp/tools/ocpi/list-versions-ocpi";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listVersionsOcpi, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `ocpi`:

- `list_versions_ocpi` (`read`): This endpoint lists all the available OCPI versions and the corresponding URLs to where version specific details such as the supported endpoints can be found.

### Resource `ocpi.v22`:

- `retrieve_ocpi_v22` (`read`):

### Resource `ocpi.v22.sender.chargingprofiles`:

- `update_sender_v22_ocpi_chargingprofiles` (`write`):
- `create_result_sender_v22_ocpi_chargingprofiles` (`write`):

### Resource `ocpi.v22.receiver.chargingprofiles`:

- `retrieve_receiver_v22_ocpi_chargingprofiles` (`read`):
- `update_receiver_v22_ocpi_chargingprofiles` (`write`):
- `delete_receiver_v22_ocpi_chargingprofiles` (`write`):

### Resource `ocpi.v22.credentials`:

- `create_v22_ocpi_credentials` (`write`):
- `update_v22_ocpi_credentials` (`write`):
- `list_v22_ocpi_credentials` (`read`):
- `delete_v22_ocpi_credentials` (`write`):

### Resource `ocpi.sender.v22`:

- `update_sender_ocpi_v22` (`write`):

### Resource `ocpi.sender.v22.cdrs`:

- `retrieve_v22_sender_ocpi_cdrs` (`read`):
- `list_v22_sender_ocpi_cdrs` (`read`):

### Resource `ocpi.sender.v22.locations`:

- `retrieve_v22_sender_ocpi_locations` (`read`):
- `list_v22_sender_ocpi_locations` (`read`):
- `retrieve_evse_v22_sender_ocpi_locations` (`read`):
- `retrieve_page_v22_sender_ocpi_locations` (`read`):

### Resource `ocpi.sender.v22.sessions`:

- `retrieve_v22_sender_ocpi_sessions` (`read`):
- `list_v22_sender_ocpi_sessions` (`read`):
- `update_charging_preferences_v22_sender_ocpi_sessions` (`write`):

### Resource `ocpi.sender.v22.tariffs`:

- `retrieve_v22_sender_ocpi_tariffs` (`read`):
- `list_v22_sender_ocpi_tariffs` (`read`):

### Resource `ocpi.sender.v22.tokens`:

- `retrieve_v22_sender_ocpi_tokens` (`read`):
- `list_v22_sender_ocpi_tokens` (`read`):
- `authorize_v22_sender_ocpi_tokens` (`write`):

### Resource `ocpi.receiver.v22.cdrs`:

- `create_v22_receiver_ocpi_cdrs` (`write`):
- `retrieve_v22_receiver_ocpi_cdrs` (`read`):

### Resource `ocpi.receiver.v22.commands`:

- `cancel_reservation_v22_receiver_ocpi_commands` (`write`):
- `reserve_now_v22_receiver_ocpi_commands` (`write`):
- `start_session_v22_receiver_ocpi_commands` (`write`):
- `stop_session_v22_receiver_ocpi_commands` (`write`):
- `unlock_connector_v22_receiver_ocpi_commands` (`write`):

### Resource `ocpi.receiver.v22.locations`:

- `retrieve_v22_receiver_ocpi_locations` (`read`):
- `update_v22_receiver_ocpi_locations` (`write`):
- `modify_v22_receiver_ocpi_locations` (`write`):
- `modify_evse_v22_receiver_ocpi_locations` (`write`):
- `retrieve_evse_v22_receiver_ocpi_locations` (`read`):
- `update_connector_v22_receiver_ocpi_locations` (`write`):
- `update_evse_v22_receiver_ocpi_locations` (`write`):

### Resource `ocpi.receiver.v22.sessions`:

- `retrieve_v22_receiver_ocpi_sessions` (`read`):
- `update_v22_receiver_ocpi_sessions` (`write`):

### Resource `ocpi.receiver.v22.tariffs`:

- `retrieve_v22_receiver_ocpi_tariffs` (`read`):
- `update_v22_receiver_ocpi_tariffs` (`write`):
- `delete_v22_receiver_ocpi_tariffs` (`write`):

### Resource `ocpi.receiver.v22.tokens`:

- `retrieve_v22_receiver_ocpi_tokens` (`read`):
- `update_v22_receiver_ocpi_tokens` (`write`):
