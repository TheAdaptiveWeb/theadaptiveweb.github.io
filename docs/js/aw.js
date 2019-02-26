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

const AdaptiveWeb = (function(window) {

    let messageQueue = [];
    
    function sendMessage(message, data) {
        let promise = new Promise((resolve, reject) => {
            messageQueue.push(resolve);
            setTimeout(reject, 1000);
        });

        window.postMessage({ message, data, outbound: true }, '*');

        return promise;
    }

    window.addEventListener('message', event => {
        if (event.source != window || event.data.outbound) return;

        let resolve = messageQueue.pop();
        if (resolve != undefined) {
            resolve(event.data);
        }
    });

    return {
        sendMessage,
    }

})(this);