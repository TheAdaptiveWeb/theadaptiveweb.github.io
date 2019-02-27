import * as React from 'react';
import styled from 'styled-components';
import { Card } from '..';

class Modal extends React.Component {
    render() {
        return (
            <ModalBackground>
                <Card>
                    {this.props.children}
                </Card>
            </ModalBackground>
        );
    }
}

const ModalBackground = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(45deg, rgba(119, 188, 238, 0.77) 0%, rgba(74, 144, 226, 0.77) 100%);
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
`;


export default Modal;