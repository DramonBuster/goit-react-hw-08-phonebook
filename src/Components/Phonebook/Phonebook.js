import React, { useEffect, Suspense, lazy } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getContact } from '../../redux/contacts/contacts-action';
import styled from 'styled-components';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: venter;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0px;
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: center;
`;

const SubHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

const Phonebook = ({ getContact }) => {
  getContact();
  return (
    <Wrapper>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <SubHeading>Contacts</SubHeading>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  getContact: () => dispatch(getContact()),
});

export default connect(null, mapDispatchToProps)(Phonebook);
