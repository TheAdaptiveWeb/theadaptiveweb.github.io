import * as React from 'react';
import styled from 'styled-components';

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <SwitchLabel>
                <SwitchDiv>
                    <input type="checkbox" checked={this.props.checked} disabled={this.props.disabled} onChange={(event) => { this.props.onChange(event.target.checked) }} />
                    <span>
                        <div />
                    </span>
                </SwitchDiv>
                <LabelDiv>
                    <LabelTitle>{this.props.title}</LabelTitle>
                    <LabelSubtitle>{this.props.subtitle}</LabelSubtitle>
                </LabelDiv> 
            </SwitchLabel>
        );
    }
}

const SwitchLabel = styled.label`
position: relative;
display: flex;
`;

const LabelDiv = styled.div`
flex-grow: 1;
margin-left: 20px;
`;

const LabelTitle = styled.div`
font-weight: bold;
font-size: 17px;
`;

const LabelSubtitle = styled.div`
`;

const SwitchDiv = styled.div`
position: relative;
display: inline-block;
width: 50px;
height: 20px;
flex-basis: 50px;
margin-top: 10px;
flex-grow: 0;
flex-shrink: 0;

> input {
    opacity: 0;
    width: 0;
    height: 0;
}

> span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.field.bg};
    ${props => props.theme.field.border && 'border: solid 2px ' + props.theme.field.border}
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 10px;
}

> span > div {
    position: absolute;
    height: 25px;
    width: 25px;
    ${props => props.theme.field.border ? 'left: -2px; top: -5px;' : 'left: 0; top: -3px;'}
    transition: .4s, background-color .4s;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
}

> span > div:before {
    content: ' ';
    position: absolute;
    height: 26px;
    width: 26px;
    background: ${props => props.theme.gradient.red};
}

> input:checked + span > div:before {
    background: ${props => props.theme.gradient.primary};
}

> input:checked + span > div {
    transform: translateX(26px);
}

> input:disabled + span {
    background: ${props => props.theme.field.disabledBg};
}

> input:disabled + span > div:before {
    background: ${props => props.theme.gradient.gray};
}

`;

export default Switch;
