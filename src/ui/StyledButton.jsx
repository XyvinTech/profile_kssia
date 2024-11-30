import React from "react";
import styled, { css } from "styled-components";

const buttonVariants = css`
  ${(props) =>
    props.variant === "primary" &&
    css`
      font-family: Inter;
      border: none;
      font-size: 16px;
      font-weight: 500;
      color: #fcfdfe;
      background-color: #004797;
     
    `}
  ${(props) =>
    props.variant === "preview" &&
    css`
      font-family: Inter;
      border: none;
      font-size: 16px;
      font-weight: 500;
      color: #004797;
      background-color: #fff;
      border: 1px solid #004797;
  
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      font-family: Inter;
      border: 1px solid #a8a8a8;
      font-size: 16px;
      font-weight: 500;
      color: #322f3b;

      background-color: #f3efef;
      radius: 200px;
    `}


${(props) =>
    props.variant === "third" &&
    css`
      font-family: Inter;
      border: 1px solid #a8a8a8;
      font-size: 16px;
      font-weight: 600;
      color: #4a4647;
      background-color: #f3efef;
      radius: 200px;
    `}
`;

const disabledStyles = css`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const ButtonContainer = styled.button`
  padding: 16px;
  height: 48px;
  text-align: center;
border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${buttonVariants}
  ${disabledStyles}
`;

export const StyledButton = ({ name, variant, color, onClick, disabled }) => {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </ButtonContainer>
  );
};
