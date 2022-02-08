export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getToken = state => state.auth.token;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
