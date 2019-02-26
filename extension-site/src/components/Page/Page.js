import * as React from 'react';
import styled from 'styled-components';

class Page extends React.Component {
    render() {
        return (
            <PageDiv>
                <PageTitle>{this.props.title}</PageTitle>
                <PageSubtitle>{this.props.subtitle}</PageSubtitle>
                {this.props.children}
            </PageDiv>
        );
    }
}

const PageDiv = styled.div`

`;

const PageTitle = styled.div`
text-align: center;
font-size: 32px;
`;

const PageSubtitle = styled.div`
text-align: center;
color: #4A4A4A;
font-size: 20px;
margin-bottom: 20px;
`;

export default Page;