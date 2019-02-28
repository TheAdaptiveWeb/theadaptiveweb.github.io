import * as React from 'react';
import styled from 'styled-components';

class Section extends React.Component {
    render() {
        return (
            <SectionDiv>
                <SectionTitle>
                    {this.props.title}
                </SectionTitle>
                {this.props.children}
            </SectionDiv>
        );
    }
}

const SectionDiv = styled.div`
margin-bottom: 30px;
`;

const SectionTitle = styled.div`
font-size: 21px;
margin-bottom: 10px;
color: ${props => props.theme.text.primary};
`;

export default Section;
