import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.nav`
  background-color: #007bff;
  color: #fff;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Calorie Tracker</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/view-foods">View Foods</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
