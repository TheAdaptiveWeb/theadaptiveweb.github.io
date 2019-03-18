/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 * 
 *  Licensed under the Mozilla Public License 2.0 (the "License"). 
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *  
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *  
 *  or in the "license" file accompanying this file. This file is distributed 
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 *  express or implied. See the License for the specific language governing 
 *  permissions and limitations under the License.
 */
export default class PluginCommunicator {

    constructor() {
        this.messageIterator = 0;
        this.resolveBacklog = {};
        this.loadBacklog = [];
        this.pluginLoaded = false;
        this.timeout = 1000;
        // register
        window.addEventListener('message', this.handleMessage.bind(this));
    }

    sendMessage(message, data) {
        return new Promise((resolve, reject) => {
            let messageId = ++this.messageIterator;
            if (!this.pluginLoaded) {
                this.loadBacklog.push({ messageId, bundle: { message, data } });
            } else {
                window.postMessage({ messageId, bundle: { message, data }, outbound: true }, '*');
            }

            this.resolveBacklog[messageId] = { resolve, reject };

            setTimeout(() => { 
                if (this.resolveBacklog[messageId] !== undefined) {
                    this.resolveBacklog[messageId] = undefined;
                    reject('Message sending timeout'); 
                }
            }, this.timeout);
        });
    }

    handleMessage(event) {
        // Is this message initiating the plugin?
        if (event.data.message === 'initAdaptiveWebPlugin') {
            this.pluginLoaded = true;
            this.loadBacklog.forEach(message => {
                let { messageId, bundle } = message;
                window.postMessage({ messageId, bundle, outbound: true }, '*');
            });
        }

        if (!this.pluginLoaded) return;
        if (event.data.outbound) return;

        let { messageId, bundle, isError } = event.data;
        let backlog = this.resolveBacklog[messageId];
        if (backlog !== undefined) {
            let { resolve, reject } = backlog;
            this.resolveBacklog[messageId] = undefined;

            if (isError) reject(bundle);
            else         resolve(bundle);
        }
    }

}