
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