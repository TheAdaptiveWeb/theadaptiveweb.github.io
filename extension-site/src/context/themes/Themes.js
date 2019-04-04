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
import defaultThemeImage from './defaultTheme.png';
import darkThemeImage from './darkTheme.png';
import highContrastThemeImage from './highContrastTheme.png';
import highContrastInvertedImage from './highContrastInverted.png'

function gradient(from, to) {
    return `linear-gradient(45deg, ${from} 0%, ${to} 100%)`;
}

const DefaultTheme = {
    background: '#fafbfc',
    paper: '#fff',
    accent: {
        light: '#7db9e8',
        normal: '#62A8E8',
        dark: '#4a90e2'
    },
    gradient: {
        primary: gradient('#7db9e8', '#4a90e2'),
        red: gradient('#EE7777', '#E24A4A'),
        gray: gradient('#737373', '#343434'),
        green: gradient('#6ABF69', '#388E3C'),
        purple: gradient('#674bc5', '#783fce'),
    },
    text: {
        primary: '#000',
        secondary: '#4A4A4A',
    },
    link: {
        active: '#fff',
        inactive: '#000',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: '',
        default: '#4A90E2',
        visited: '#185AA8'
    },
    button: {
        normal: '#62A8E8',
        danger: '#E86262',
        success: '#66B163'
    },
    field: {
        bg: '#EFEFEF',
        disabledBg: '#737373',
        text: '#000',
    },
    separatorColor: '#D8D8D8'
}

const DarkTheme = {
    background: '#1c1c1c',
    paper: '#292929',
    accent: {
        light: '#4a6f8c',
        normal: '#62A8E8',
        dark: '#1c66bd'
    },
    gradient: {
        primary: gradient('#7db9e8', '#4a90e2'),
        red: gradient('#EE7777', '#E24A4A'),
        gray: gradient('#737373', '#343434'),
        green: gradient('#6ABF69', '#388E3C'),
        purple: gradient('#674bc5', '#783fce'),
    },
    text: {
        primary: '#fff',
        secondary: '#b3b3b3',
    },
    link: {
        active: '#fff',
        inactive: '#fff',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: 'filter: invert(100%)',
        default: '#77BCEE',
        visited: '#97C8EC'
    },
    button: {
        normal: '#62A8E8',
        danger: '#E86262',
        success: '#66B163'
    },
    field: {
        bg: '#474747',
        disabledBg: '#737373',
        text: '#FFF',
    },
    separatorColor: '#555'
}

const HighContrastTheme = {
    background: '#1c1c1c',
    paper: '#000',
    accent: {
        light: '#fff',
        normal: '#fff',
        dark: '#fff'
    },
    gradient: {
        primary: gradient('#7db9e8', '#4a90e2'),
        red: gradient('#EE7777', '#E24A4A'),
        gray: gradient('#737373', '#343434'),
        green: gradient('#6ABF69', '#388E3C'),
        purple: gradient('#674bc5', '#783fce'),
    },
    text: {
        primary: '#fff',
        secondary: '#fff',
    },
    link: {
        active: '#000',
        inactive: '#fff',
        activeIcon: '',
        inactiveIcon: 'filter: invert(100%)',
        default: '#fff',
        visited: '#fff'
    },
    button: {
        normal: '#fff',
        danger: '#fff',
        success: '#fff'
    },
    field: {
        bg: '#EFEFEF',
        border: '#fff',
        text: '#000',
        disabledBg: '#737373',
    },
    separatorColor: '#fff'
}

const HighContrastInvertedTheme = {
    background: '#fafbfc',
    paper: '#fff',
    accent: {
        light: '#000',
        normal: '#000',
        dark: '#000'
    },
    gradient: {
        primary: gradient('#7db9e8', '#4a90e2'),
        red: gradient('#EE7777', '#E24A4A'),
        gray: gradient('#737373', '#343434'),
        green: gradient('#6ABF69', '#388E3C'),
        purple: gradient('#674bc5', '#783fce'),
    },
    text: {
        primary: '#000',
        secondary: '#000',
    },
    link: {
        active: '#fff',
        inactive: '#000',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: '',
        default: '#000',
        visited: '#000'
    },
    button: {
        normal: '#000',
        danger: '#000',
        success: '#000'
    },
    field: {
        bg: '#EFEFEF',
        text: '#000',
        border: '#000',
        disabledBg: '#737373',
    },
    separatorColor: '#000'
}

export const Themes = {
    light: {
        name: 'Light (default)',
        theme: DefaultTheme,
        image: defaultThemeImage
    },
    dark: {
        name: 'Dark',
        theme: DarkTheme,
        image: darkThemeImage
    },
    highContrast: {
        name: 'High Contrast',
        theme: HighContrastTheme,
        image: highContrastThemeImage
    },
    highContrastInverted: {
        name: 'High Contrast Light',
        theme: HighContrastInvertedTheme,
        image: highContrastInvertedImage
    }
};