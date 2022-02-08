import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const Navigation = styled.nav`
  color: red;
  /* border-bottom: solid 1px pink; */
`;

export default function AuthNav() {
  return (
    <Navigation>
      <NavigationNavLink exact to="/register">
        Sign Up
      </NavigationNavLink>
      <NavigationNavLink exact to="/login">
        Log In
      </NavigationNavLink>
    </Navigation>
  );
}
