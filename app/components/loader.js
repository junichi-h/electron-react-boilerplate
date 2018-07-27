/* @flow */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const color = keyframes`
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  
`;

const Loading = styled.div`
  width: 100px;
  height: 100px;
`;

const Svg = styled.svg`
  height: 100px;
  transform-origin: center center;
  width: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
`;

const Loader = () => (
  <Container>
    <Inner>
      <Loading>
        <Svg viewBox='25 25 50 50'>
          <Circle cx='50' cy='50' r='20' fill='none' />
        </Svg>
      </Loading>
    </Inner>
  </Container>
);
export default Loader;
