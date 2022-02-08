import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import IconButton from '@mui/material/IconButton';
import { AccountCircle } from '@mui/icons-material';
import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  margin-right: 20px;
  color: grey;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.375;
`;

export const LogOutButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 10px 0px;
  color: red;
  border: 1px solid red;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  font-style: normal;
  font-weight: 500;
  min-width: 100px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  focus {
    color: white;
    background-color: red;
  }
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <UserMenuWrapper>
      <IconButton disabled color="primary">
        <AccountCircle />
      </IconButton>
      <Name startIcon={<AccountCircle />}>Welcome, {name}</Name>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutButton>
    </UserMenuWrapper>
  );
}
