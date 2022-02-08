import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import ContactList from '../../Components/ContactList/ContactList';
import { getContact } from '../../redux/contacts/contacts-action';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactsHeader = styled.h5`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  color: red;
`;

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact()), [dispatch]);
  return (
    <ContactsWrapper>
      <ContactsHeader>Create new contact</ContactsHeader>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsWrapper>
  );
}
