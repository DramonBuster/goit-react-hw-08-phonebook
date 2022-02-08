import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationNavLink = styled(NavLink)`
  margin-right: 20px;
  color: red;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.475;

  &.active {
    color: blue;
  }
`;

const NavigationSection = styled.nav`
  color: rgba(39, 164, 236, 0);
  display: flex;
  align-items: center;
`;

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavigationSection>
      <NavigationNavLink exact to="/">
        Home
      </NavigationNavLink>

      {isLoggedIn && (
        <NavigationNavLink to="/contacts">Contacts</NavigationNavLink>
      )}
    </NavigationSection>
  );
}
