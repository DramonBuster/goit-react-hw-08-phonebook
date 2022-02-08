import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel>Name</InputLabel>
          <Input type="text" value={name} onChange={handleChangeName} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>Email</InputLabel>
          <Input type="email" value={email} onChange={handleChangeEmail} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </div>
  );
}
