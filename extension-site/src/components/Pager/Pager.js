import * as React from 'react';
import styled from 'styled-components';

class Pager extends React.Component {
    render() {
        return (
            <PagerDiv>
                {this.props.children}
            </PagerDiv>
        );
    }
}


const PagerDiv = styled.div`
left: 0;
top: 0;
right: 0;
bottom: 0;
position: absolute;
padding: 20px 40px;
overscroll-behavior-y: contain;
height: 100%;
box-sizing: border-box;
`;

export default Pager;