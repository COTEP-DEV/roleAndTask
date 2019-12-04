/// <reference types="node" />
import * as zmq from 'zeromq';
import AZeroMQ from '../AZeroMQ.js';
/**
 * Client to use when you have an Bidirectionnal connection - exemple socketType = DEALER
 * This class include custom KeepAlive
 */
export default class ZeroMQClientDealer extends AZeroMQ<zmq.Dealer> {
    protected descriptorInfiniteRead: NodeJS.Timeout | null;
    protected isClosing: boolean;
    protected pingTimeoutDescriptor: NodeJS.Timeout | null;
    protected intervalSendAlive: NodeJS.Timeout | null;
    constructor();
    protected waitConnection(): Promise<unknown>;
    start({ ipServer, portServer, transport, identityPrefix, }: {
        ipServer?: string;
        portServer?: string;
        transport?: string;
        identityPrefix?: string;
    }): Promise<any>;
    /**
   * Send pings to the clients every Xsec
   */
    protected startPingRoutine(): void;
    protected stopPingRoutine(): void;
    stop(): Promise<any>;
    /**
     * Setup a function that is calleed when socket get connected
     */
    listenConnectEvent(func: Function): void;
    /**
     * Setup a function that is calleed when socket get disconnected
     */
    listenDisconnectEvent(func: Function): void;
    sendMessage(message: string): Promise<void>;
    protected handleErrorPingTimeout(): void;
    /**
     * Receive ping from server
     */
    protected handleNewPing(): void;
    /**
     * Treat messages that comes from server
     */
    protected treatMessageFromServer(): void;
    /**
     * First message to send to the server to be regristered into it
     */
    clientSayHelloToServer(): Promise<void>;
}
