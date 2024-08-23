import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Title>Create Quotes</Title>
        <UlList>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "#88dfdf",
                };
              }}
              to={"quotes"}
            >
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#fff" : "#88dfdf",
                };
              }}
              to={"add-quote"}
            >
              Add New Quotes
            </NavLink>
          </li>
        </UlList>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;

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
`;

const UlList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 20px;
  align-items: center;

  text-decoration: underline;
`;
