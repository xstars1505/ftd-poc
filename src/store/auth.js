export const authState = {
  state: {
    token: localStorage.getItem("token") || "",
    logon: false,
    userIdentity: null,
    authenticated: false
  },
  getters: {
    logon: state => {
      return state.logon;
    },
    authorized: state => !!state.token,
    account: state => state.userIdentity,
    authenticated: state => state.authenticated
  },
  mutations: {
    authenticate(state) {
      state.logon = true;
    },
    authenticated(state, identity) {
      state.userIdentity = identity;
      state.authenticated = true;
      state.logon = false;
    },
    logout(state) {
      state.userIdentity = null;
      state.authenticated = false;
      state.logon = false;
    }
  }
};