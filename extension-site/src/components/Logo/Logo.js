import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';

class Logo extends React.PureComponent {
    render() {
        return (
            <LogoSvg animate={this.props.animate}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stop-color="#77BCEE" offset="0%"></stop>
                        <stop stop-color="#4A90E2" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Logo" fill-rule="nonzero">
                        <g id="Group-2">
                            <g transform="translate(-97.000000, 0.000000)">
                                <circle id="Oval" fill="url(#linearGradient-1)" cx="581.5" cy="484.5" r="484.5"></circle>
                                <g id="Group" transform="translate(0.000000, 303.000000)" stroke="#FFFFFF" stroke-width="50">
                                    <path d="M0.202962277,76.2275338 L93.783207,189 C127.672093,227.818534 162.520914,246.624923 198.329672,245.419167 C252.042809,243.610533 404.17233,0.0438904168 578,0.0438904168 C693.885113,0.0438904168 786.594864,58.8859639 856.129253,176.570111" id="Path-2"></path>
                                    <path d="M307,194.67535 L400.580245,307.447817 C434.46913,346.266351 469.317952,365.07274 505.12671,363.866983 C558.839847,362.058349 718.09862,108 891.92629,108 C1007.8114,108 1098.14474,170.339309 1162.92629,295.017927" id="Path-2" transform="translate(734.963145, 235.960735) scale(-1, -1) translate(-734.963145, -235.960735) "></path>
                                </g>
                                <circle id="Oval-2" stroke="#FFFFFF" stroke-width="50" fill="#95C6FF" cx="582" cy="485" r="75"></circle>
                            </g>
                        </g>
                    </g>
                </g>
            </LogoSvg>
        );
    }
}

const pathKeyframes = keyframes`
0% {
    stroke-dashoffset: 900;
    stroke-dasharray: 1000;
}
50% {
    stroke-dashoffset: 900;
    stroke-dasharray: 1000;
}
100% {
    stroke-dashoffset: -90;
    stroke-dasharray: 1000;
}
`;

const opacityKeyframes = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const LogoSvg = styled.svg.attrs({
    viewBox: "0 0 969 969",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    'xmlns:xlink': "http://www.w3.org/1999/xlink"
})`
width: 75px;
height: 75px;
margin: auto;

> g > g > g > g > #Oval-2 {
    ${props => props.animate && css`animation: 1s ${opacityKeyframes} ease-in-out;`}
}

> g > g > g > g > g > path {
    ${props => props.animate && css`animation: 1s ${pathKeyframes} ease-in-out;`}
}
`;

export default Logo;
