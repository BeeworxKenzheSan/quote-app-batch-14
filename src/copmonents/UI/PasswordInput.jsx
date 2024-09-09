import { useState } from "react";
import styled from "styled-components";

const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <PasswordWrapper>
        <StyledInput
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          id={label}
          {...rest}
        />
        <ToggleButton type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Скрыть" : "Показать"}
        </ToggleButton>
      </PasswordWrapper>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </div>
  );
};

export default PasswordInput;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  border: 1px solid aqua;
  border-radius: 4px;
  width: 100%;
  padding: 7px;
  font-size: 20px;
  outline-color: #008080;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
  margin-top: 8px;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #008080;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const StyledErrorMessage = styled.div`
  color: #f04438;
  font-size: 14px;
`;
