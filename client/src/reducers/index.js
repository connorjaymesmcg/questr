// All reducers...

import { combineReducers } from 'redux';

import posts from './posts';

// Access to all individual reducers
export default combineReducers({
  posts,
});
