import * as React from 'react';
import styled from 'styled-components';
import BackArrowImage from './backArrow.svg';


class BackLink extends React.PureComponent {
    render() {
        return (
            <BackLink>
                <BackArrow /> {this.props.children}
            </BackLink>
        );
    }
}

const BackLink = styled.div`
color: #4A90E2;
margin-bottom: 10px;
display: inline-block;
`;

const BackArrow = styled.span`
background-image: url(${BackArrowImage});
background-size: cover;
width: 10px;
height: 11px;
display: inline-block;
${props => props.theme.link.inactiveIcon}
`;

export default BackLink;
