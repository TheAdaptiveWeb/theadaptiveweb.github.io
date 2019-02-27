import * as React from 'react';
import styled from 'styled-components';

class Page extends React.Component {
    render() {
        return (
            <PageDiv>
                <PageHeader>
                    <PageTitle>{this.props.title}</PageTitle>
                    <PageSubtitle>{this.props.subtitle}</PageSubtitle>
                </PageHeader>
                {this.props.children}
            </PageDiv>
        );
    }
}

const PageDiv = styled.div`
`;

const PageHeader = styled.div`
padding: 20px 0;
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