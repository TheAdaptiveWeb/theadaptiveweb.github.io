import defaultThemeImage from './defaultTheme.png';
import darkThemeImage from './darkTheme.png';
import highContrastThemeImage from './highContrastTheme.png';
import highContrastInvertedImage from './highContrastInverted.png'

const DefaultTheme = {
    background: '#fafbfc',
    paper: '#fff',
    accent: {
        light: '#7db9e8',
        normal: '#62A8E8',
        dark: '#4a90e2'
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
    separatorColor: '#D8D8D8'
}

const DarkTheme = {
    background: '#1c1c1c',
    paper: '#292929',
    accent: DefaultTheme.accent,
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