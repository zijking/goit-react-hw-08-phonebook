const getIsLoggenIn = state => state.auth.isLoggedIn;

const getLogin = state => state.auth.user.name;

const userSelectors = {
  getIsLoggenIn,
  getLogin,
};

export default userSelectors;
