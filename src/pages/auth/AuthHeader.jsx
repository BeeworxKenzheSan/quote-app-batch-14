import styled from "styled-components";

export const AuthHeader = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Title>QUOTES APP</Title>
      </NavBar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #008080;
  padding: 20px 80px;
  margin-bottom: 100px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;
