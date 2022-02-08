import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import ContactList from '../../Components/ContactList/ContactList';
import { getContact } from '../../redux/contacts/contacts-action';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact()), [dispatch]);
  return (
    <div>
      <Typography
        sx={{
          color: '#808090',
        }}
        variant="h5"
        component="div"
        gutterBottom
      >
        Create new contact
      </Typography>
      <ContactForm />
      {/* <Typography
          sx={{         
            color: '#808090',    
          }}
          variant="h4"
          component="div"
          gutterBottom>
          Contacts
        </Typography> */}
      <Filter />
      <ContactList />
    </div>
  );
}
