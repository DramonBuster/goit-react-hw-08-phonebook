import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as operations from './auth-operations';

import initialData from '../contacts/contacts-data';

const userReducer = createReducer(initialData.auth.user, {
  [operations.register.fulfilled]: (_, { payload }) => payload.user,
  [operations.logIn.fulfilled]: (_, { payload }) => payload.user,
  [operations.logOut.fulfilled]: () => ({ name: null, email: null }),
  [operations.getCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(initialData.auth.token, {
  [operations.register.fulfilled]: (_, { payload }) => payload.token,
  [operations.logIn.fulfilled]: (_, { payload }) => payload.token,
  [operations.logOut.fulfilled]: () => null,
});

const loggedReducer = createReducer(initialData.auth.isLoggedIn, {
  [operations.register.fulfilled]: () => true,
  [operations.logIn.fulfilled]: () => true,
  [operations.logOut.fulfilled]: () => false,
  [operations.getCurrentUser.fulfilled]: () => true,
});

const currentUserReducer = createReducer(
  initialData.auth.isFetchingCurrentUser,
  {
    [operations.getCurrentUser.fulfilled]: () => false,
    [operations.getCurrentUser.pending]: () => true,
    [operations.getCurrentUser.rejected]: () => false,
  },
);

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isLoggedIn: loggedReducer,
  isFetchingCurrentUser: currentUserReducer,
});
