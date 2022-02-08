import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getCurrentUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
import AppBar from './Components/AppBar';
import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './Components/Routes/PublicRoute';
import styled from 'styled-components';
// import Phonebook from './Components/Phonebook/Phonebook';

const Home = lazy(() =>
  import('./pages/Home/Home' /*webpackChunkName: "home" */),
);
const Register = lazy(() =>
  import('./pages/Register/Register' /*webpackChunkName: "register" */),
);
const Login = lazy(() =>
  import('./pages/Login/Login' /*webpackChunkName: "login" */),
);
const Contacts = lazy(() =>
  import('./pages/Contacts/Contacts' /*webpackChunkName: "contacts" */),
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 15px;
  width: 830px;
`;

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        {/* <Phonebook /> */}
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <Register />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <Login />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
