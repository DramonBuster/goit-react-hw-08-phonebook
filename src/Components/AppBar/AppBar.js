import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: rgb(39, 164, 236);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.475;
  border-bottom: solid 1px rgb(39, 164, 236);

  &.active {
    color: rgb(4, 109, 165);
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
