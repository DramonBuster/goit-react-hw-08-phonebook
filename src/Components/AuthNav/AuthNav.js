import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationNavLink = styled(NavLink)`
  margin-right: 20px;
  color: rgb(39, 164, 236);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.475;

  &.active {
    color: rgb(4, 109, 165);
  }
`;

const Navigation = styled.nav`
  color: rgb(39, 164, 236);
  /* border-bottom: solid 1px pink; */
`;

export default function AuthNav() {
  return (
    <Navigation>
      <NavigationNavLink exact to="/register" activeClassName="activeLink">
        Register
      </NavigationNavLink>
      <NavigationNavLink exact to="/login" activeClassName="activeLink">
        Login
      </NavigationNavLink>
    </Navigation>
  );
}
