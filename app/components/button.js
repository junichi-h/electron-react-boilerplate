import React, { Fragment } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: inline-block;
  flex: 1 1 auto;
  margin: 10px;
  padding: 10px;
  border: 2px solid #f7f7f7;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  width: 20%;
  border-radius: 0;
  transition-duration: 0.6s;
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  outline: none;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #f7f7f7;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transition-property: border-radius;
  }

  &:hover {
    border-radius: 30px;
    &:after {
      left: 0;
    }
  }
`;

const Button = props => (
    <Fragment>
      <ButtonContainer
          onClick={event => {
            event.preventDefault();
            props.onClick();
          }}
      >
        {props.label}
      </ButtonContainer>
    </Fragment>
);
export default Button;
