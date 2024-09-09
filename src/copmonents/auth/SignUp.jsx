// Войти

import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import PasswordInput from "../UI/PasswordInput";
import { useState } from "react";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { name, email, password });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Create an account</Title>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={"Name"}
          placeholder="Enter your name"
          errorMessage={errors.name}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email*"}
          placeholder="Enter your email"
          errorMessage={errors.email}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
          placeholder="Create a password"
          errorMessage={errors.password}
        />
        <ButtonContainer>
          <Button type="submit">Get started</Button>
        </ButtonContainer>
        <div>
          <p>Already have an account?</p>
          <StyledLink to="/signIn">Log in</StyledLink>
        </div>
      </form>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: end;
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

const StyledLink = styled(Link)`
  color: #008080;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`;
