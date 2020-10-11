import axios from 'axios';

export const namespace = 'USERS';
export const FETCH_USERS = `${namespace}/FETCH_USERS`;
export const FETCH_USERS_SUCCESS = `${namespace}/FETCH_USERS_SUCCESS`;

export const fetchUsers = async (
  url = 'https://api.github.com/users',
) => async (dispatch: any) => {
  dispatch({ type: FETCH_USERS });

  const payload = await axios.get(url);

  dispatch({ type: FETCH_USERS_SUCCESS, payload });
};
