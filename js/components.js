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

const C = {

    /**
     * Button
     */
    button: {
        view: function(vnode) {
            let text = vnode.attrs.text;
            return m('button', { 
                class: 'btn' + ((vnode.class != undefined) ? vnode.class.join(' ') : '')
            }, text);
        }
    },

    /**
     * Card view
     */
    card: {
        view: function(vnode) {
            // Atributes
            let image = vnode.attrs.image;
            
            let style;
            if (image != undefined) {
                style = {
                    'background-image': image
                }
            }

            return m('div', {
                class: 'card',
            });
        }
    },

    logo: {
        view: function(vnode) {
            return m('div', {
                id: '#logo'
            })
        }
    },

    preloader: function() {
        let x, y;
        return {
            oninit: vnode => {
                // Calculate position of logo.
                let logo = document.getElementById('logo');
                let bounds = logo.getBoundingClientRect();
                
                x = bounds.left, y = bounds.right;
                this.
            },
            onbeforeremove: vnode => {
                return new Promise(resolve => {
    
                });
            },
            view: function(vnode) {
    
            }
        }
    }

}