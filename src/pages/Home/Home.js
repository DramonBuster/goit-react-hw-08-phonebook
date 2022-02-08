import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const HomeWrapper = styled.div`
  text-align: center;
  font-size: 48px;
`;

const HomeGreeting = styled.h1`
  color: red;
`;

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <HomeWrapper>
      {isLoggedIn ? (
        <HomeGreeting>
          Welcome! <br />
          Press "Contacts" to get access to your phonebook
        </HomeGreeting>
      ) : (
        <HomeGreeting>
          Welcome! <br />
          To start, please, sign up or log in.
        </HomeGreeting>
      )}
    </HomeWrapper>
  );
}
