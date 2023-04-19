import axios from "axios";

export const login = (credentials) => {
  return (dispatch) => {
    axios
      .post("/api/login", credentials)
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", user: res.data.user });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios
      .get("/api/logout")
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGOUT_ERROR", err });
      });
  };
};
