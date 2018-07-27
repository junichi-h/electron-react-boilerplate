/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string,
  bgColor: string
};

const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #3f3f3f;
`;

const Section = (props: Props) => (
  <Container bgColor={props.bgColor}>
    <Text>
      { props.text }
    </Text>
  </Container>
);

export default Section;
