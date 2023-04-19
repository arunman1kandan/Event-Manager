const initState = {
  user: null,
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        user: action.user,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        user: null,
        authError: "Login failed",
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        user: null,
        authError: null,
      };
    case "LOGOUT_ERROR":
      console.log("logout error");
      return {
        ...state,
        user: null,
        authError: "Logout failed",
      };
    default:
      return state;
  }
};

export default authReducer;
