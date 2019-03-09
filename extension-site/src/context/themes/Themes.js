import defaultThemeImage from './defaultTheme.png';
import darkThemeImage from './darkTheme.png';
import highContrastThemeImage from './highContrastTheme.png';
import highContrastInvertedImage from './highContrastInverted.png'

function gradient(from, to) {
    return `linear-gradient(45deg, ${from} 0%, ${to} 100%);`;
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
        green: gradient('#6ABF69', '#388E3C')
    },
    text: {
        primary: '#000',
        secondary: '#4A4A4A',
    },
    link: {
        active: '#fff',
        inactive: '#000',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: ''
    },
    button: {
        normal: '#62A8E8',
        danger: '#E86262',
        success: '#66B163'
    },
    field: {
        bg: '#ddd',
        disabledBg: '#737373',
    },
    separatorColor: '#D8D8D8'
}

const DarkTheme = {
    background: '#1c1c1c',
    paper: '#292929',
    accent: DefaultTheme.accent,
    gradient: {
        primary: gradient('#7db9e8', '#4a90e2'),
        red: gradient('#EE7777', '#E24A4A'),
        gray: gradient('#737373', '#343434'),
        green: gradient('#6ABF69', '#388E3C')
    },
    text: {
        primary: '#fff',
        secondary: '#b3b3b3',
    },
    link: {
        active: '#fff',
        inactive: '#fff',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: 'filter: invert(100%)'
    },
    button: {
        normal: '#62A8E8',
        danger: '#E86262',
        success: '#66B163'
    },
    field: {
        bg: '#101010',
        disabledBg: '#737373',
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
        green: gradient('#6ABF69', '#388E3C')
    },
    text: {
        primary: '#fff',
        secondary: '#fff',
    },
    link: {
        active: '#000',
        inactive: '#fff',
        activeIcon: '',
        inactiveIcon: 'filter: invert(100%)'
    },
    button: {
        normal: '#fff',
        danger: '#fff',
        success: '#fff'
    },
    field: {
        bg: '#000',
        border: '#fff',
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
        green: gradient('#6ABF69', '#388E3C')
    },
    text: {
        primary: '#000',
        secondary: '#000',
    },
    link: {
        active: '#fff',
        inactive: '#000',
        activeIcon: 'filter: invert(100%)',
        inactiveIcon: ''
    },
    button: {
        normal: '#000',
        danger: '#000',
        success: '#000'
    },
    field: {
        bg: '#fff',
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