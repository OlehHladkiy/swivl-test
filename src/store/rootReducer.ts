import { combineReducers } from 'redux';

import UserReducer, {
  STATE_KEY as USER_STATE_KEY,
} from 'modules/user/UserReducer';

export default combineReducers({
  [USER_STATE_KEY]: UserReducer,
});
