import React from "react";
import styled from "styled-components";

type ButtonTypes = {
  children: React.ReactNode,
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick: () => void
}

const Button = ({ children, type = "button", onClick, ...props }: ButtonTypes) => {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: #008080;
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  color: #fff;
  cursor: pointer;
  transition: 200ms;
  font-size: 20px;

  &:hover {
    background-color: #11acac;
  }
`;
