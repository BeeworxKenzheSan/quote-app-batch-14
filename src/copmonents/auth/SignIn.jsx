// Войти

import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PasswordInput from "../UI/PasswordInput";
import { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!email.includes("@")) {
      emailError = "Введите корректный email";
    }

    if (password.length < 6) {
      passwordError = "Пароль должен быть не менее 6 символов";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      setEmail("");
      setPassword("");
      setErrors({ email: "", password: "" });
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Log in to your account</Title>
        <SubTitle>Welcome back! Please enter your details.</SubTitle>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          placeholder="Enter your email"
          errorMessage={errors.email}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
          placeholder="Enter your password"
          errorMessage={errors.password}
        />

        <ButtonContainer>
          <Button type="submit">Sign in</Button>
        </ButtonContainer>

        <div>
          <p>Don’t have an account?</p>
          <StyledLink to="/singUp">Sign up</StyledLink>
        </div>
      </form>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const SubTitle = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Container = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: end;
`;

const StyledLink = styled(Link)`
  color: #008080;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`;
