import {
  FETCH_USER,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
} from './UserActions';

export const STATE_KEY = 'user';

const initialState = {
  isLoading: false,
  data: {},
  lastUserId: '',
};

const UserReducer = (state = initialState, action: Record<string, any>) => {
  switch (action.type) {
    case FETCH_USER:
    case FETCH_USERS: {
      return { ...state, isLoading: true };
    }
    case FETCH_USER_SUCCESS: {
      const user = action.payload.data;
      const data = {
        ...state.data,
        [user.login]: user,
      };

      return { ...state, isLoading: false, data };
    }
    case FETCH_USERS_SUCCESS: {
      const users = action.payload.data;
      const indexedUsers = users.reduce(
        (res: Record<string, any>, val: any) => ({
          ...res,
          [val.login]: val,
        }),
        {},
      );

      return {
        ...state,
        isLoading: false,
        data: indexedUsers,
        lastUserId: [...users].pop().id,
      };
    }
    default: {
      return state;
    }
  }
};

export const getIsLoadingUsers = (state: any) => state[STATE_KEY].isLoading;

export const getUsers = (state: any): any =>
  Object.values(state[STATE_KEY].data);

export const getUserById = (state: any, id: string) =>
  state[STATE_KEY].data[id];

export const getLastUserId = (state: any) => state[STATE_KEY].lastUserId;

export default UserReducer;
