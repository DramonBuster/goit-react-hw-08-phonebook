import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ContactListItem from '../ContactListItem/ContactListItem';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const List = styled.ul`
  width: 400px;
`;

const ContactList = ({ contacts }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactListItem contact={contact} />
      </li>
    ))}
  </List>
);

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
  };
};

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
