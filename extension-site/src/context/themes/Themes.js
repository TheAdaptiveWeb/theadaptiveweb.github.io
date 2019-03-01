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
    }
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
    }
}

const HighContrastTheme = {
    background: '#1c1c1c',
    paper: '#000',
    accent: {
        light: '#62A8E8',
        normal: '#62A8E8',
        dark: '#62A8E8'
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
    }
}

export const Themes = {
    light: {
        name: 'Light (default)',
        theme: DefaultTheme
    },
    dark: {
        name: 'Dark',
        theme: DarkTheme
    },
    highContrast: {
        name: 'High Contrast',
        theme: HighContrastTheme
    }
};