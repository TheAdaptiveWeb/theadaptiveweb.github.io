import * as React from 'react';
import styled from 'styled-components';

class Label extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <LabelDiv>
                <LabelTitle>{this.props.title}</LabelTitle>
                <LabelSubtitle>{this.props.subtitle}</LabelSubtitle>
            </LabelDiv> 
        );
    }
}

const LabelDiv = styled.div`
`;

const LabelTitle = styled.div`
font-weight: bold;
font-size: 17px;
`;

const LabelSubtitle = styled.div`
`;

export default Label;
