import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../../context';
import { Link } from 'react-router-dom';

class ThemeSwitcher extends React.Component {
    render() {
        return (
            <ThemeSwitcherDiv>
                {Object.keys(Themes).map(key => {
                    let theme = Themes[key];
                    return (
                    <Link key={key} to="/settings">
                        <Theme onClick={() => this.props.updateGlobalOptions({ theme: key })} active={key === this.props.globalOptions.theme}>
                            <ThemeImage image={theme.image} />
                            {theme.name}
                        </Theme>
                    </Link>);
                })}
            </ThemeSwitcherDiv>
        );
    }
}

const ThemeSwitcherDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Theme = styled.div`
padding: 10px;
${props => (props.active) && 
`background: linear-gradient(45deg, ${props.theme.accent.light} 0%, ${props.theme.accent.dark} 100%);
box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);`}
color: ${props => props.active ? props.theme.link.active : props.theme.link.inactive};
text-align: center;
border-radius: 3px;
margin-right: 20px;
`;

const ThemeImage = styled.div`
background-image: url(${props => props.image});
width: 140px;
height: 100px;
margin-bottom: 10px;
border-radius: 3px;
background-size: cover;
`;

export default ThemeSwitcher;
