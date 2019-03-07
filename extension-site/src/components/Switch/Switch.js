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
                <LabelDiv>Test label</LabelDiv> 
                <SwitchDiv>
                    <input type="checkbox" />
                    <span>
                        <div />
                    </span>
                </SwitchDiv>
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
`;

const SwitchDiv = styled.div`
position: relative;
display: inline-block;
width: 50px;
height: 20px;

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
    background-color: ${props => props.theme.button.danger};
}

> input:checked + span > div:before {
    background-color: ${props => props.theme.button.normal};
}

> input:checked + span > div {
    transform: translateX(26px);
}



`;

// const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
// opacity: 0;
// width: 0;
// height: 0;

// /* &:checked + ${SwitchSlider} {
    
// }

// &:checked + ${SwitchSliderInnerInner} {
//     transform: translateX(26px);
// } */
// `;

// const SwitchSliderInner = styled.div`
// position: absolute;
// height: 25px;
// width: 25px;
// left: 0;
// top: -3px;
// -webkit-transition: .4s;
// transition: .4s;
// border-radius: 50%;
// overflow: hidden;
// box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
// `;

// const SwitchSliderInnerInner = styled.div`
// height: 26px;
// width: 26px;
// background: linear-gradient(45deg, ${props => props.theme.accent.light} 0%, ${props => props.theme.accent.dark} 100%);
// `;


export default Switch;
