// Type definitions for socketcluster-client 15.1
// Project: https://github.com/SocketCluster/socketcluster-client, http://socketcluster.io
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

export import factory = require("./lib/factory");
export import AGClientSocket = require("./lib/clientsocket");

export function create(options?: AGClientSocket.ClientOptions): AGClientSocket;

export const version: string;
