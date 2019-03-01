import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../../context';
import { Link } from 'react-router-dom';

class ThemeSwitcher extends React.Component {
    render() {
        let currentTheme = this.props.globalOptions.theme;
        return (
            <ThemeSwitcherDiv>
                {Object.keys(Themes).map(key => {
                    let theme = Themes[key];
                    console.log(theme);
                    return <Link to="/settings"><Theme onClick={() => this.props.updateGlobalOptions({ theme: key })} active={key === currentTheme}>{theme.name}</Theme></Link>
                })}
            </ThemeSwitcherDiv>
        );
    }
}

const ThemeSwitcherDiv = styled.div`
display: flex;
`;

const Theme = styled.div`
padding: 10px;
${props => (props.active) && 'background: linear-gradient(45deg, ' + props.theme.accent.light + ' 0%, ' + props.theme.accent.dark + ' 100%);'}
color: ${props => props.active ? props.theme.link.active : props.theme.link.inactive}
`;

export default ThemeSwitcher;
