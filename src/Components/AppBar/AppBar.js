import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  margin-bottom: 20px;
  color: red;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.475;
  border-bottom: solid 1px red;

  &.active {
    color: blue;
  }
`;

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}
