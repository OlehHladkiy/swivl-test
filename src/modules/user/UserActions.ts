import axios from 'axios';

import apiConfig from 'config/apiConfig';

export const namespace = 'USERS';
export const FETCH_USERS = `${namespace}/FETCH_USERS`;
export const FETCH_USERS_SUCCESS = `${namespace}/FETCH_USERS_SUCCESS`;
export const FETCH_USER = `${namespace}/FETCH_USER`;
export const FETCH_USER_SUCCESS = `${namespace}/FETCH_USER_SUCCESS`;

export const fetchUsers = () => async (dispatch: any) => {
  dispatch({ type: FETCH_USERS });

  const payload = await axios.get(`${apiConfig.apiUrl}/users`);

  dispatch({ type: FETCH_USERS_SUCCESS, payload });
};

export const fetchUser = (login: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_USER });

  const payload = await axios.get(`${apiConfig.apiUrl}/users/${login}`);

  dispatch({ type: FETCH_USER_SUCCESS, payload });
};
