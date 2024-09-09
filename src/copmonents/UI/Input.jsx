import styled from "styled-components";

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        id={label}
        {...rest}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </div>
  );
};

export default Input;

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

const StyledErrorMessage = styled.div`
  color: #f04438;
  font-size: 14px;
`;
