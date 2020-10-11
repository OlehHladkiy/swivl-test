import { FETCH_USERS, FETCH_USERS_SUCCESS } from './UserActions';

export const STATE_KEY = 'user';

const initialState = {
  loading: false,
  data: [],
};

const UserReducer = (state = initialState, action: Record<string, any>) => {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, loading: true };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    default: {
      return state;
    }
  }
};

export const getLoadingUsers = (state: any) => state[STATE_KEY].loading;

export const getUsers = (state: any) => state[STATE_KEY].data;

export default UserReducer;
