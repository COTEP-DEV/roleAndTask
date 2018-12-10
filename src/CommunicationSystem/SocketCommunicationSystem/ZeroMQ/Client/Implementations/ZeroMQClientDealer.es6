//
// Copyright (c) 2016 by Cotep. All Rights Reserved.
//

// Imports
import AZeroMQClient from '../AZeroMQClient.js';
import CONSTANT from '../../../../../Utils/CONSTANT/CONSTANT.js';

/**
 * Implements a zeroMQ Client : Type -> DEALER
 *
 */
export default class ZeroMQClientDealer extends AZeroMQClient {
  /**
   * Start a ZeroMQ Client
   * @param {{ipServer: String, portServer: String, transport: String, identityPrefix: String}} args
   */
  async start({
    ipServer,
    portServer,
    transport,
    identityPrefix,
  }) {
    return this.startClient({
      ipServer,
      portServer,
      transport,
      identityPrefix,
      socketType: CONSTANT.ZERO_MQ.SOCKET_TYPE.OMQ_DEALER,
    });
  }

  /**
   * Stop a ZeroMQ Client
   */
  async stop() {
    return this.stopClient();
  }

  /**
   * Send a message
   * @param {String} message
   */
  sendMessage(message) {
    this.sendMessageToServer(message);
  }
}
