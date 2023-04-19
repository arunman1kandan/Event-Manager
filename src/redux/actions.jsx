export const SET_AUTH = 'SET_AUTH';
export const SET_TYPE = 'SET_TYPE';

export const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    payload: auth,
  };
};

export const setType = (type) => {
  return {
    type: SET_TYPE,
    payload: type,
  };
};
