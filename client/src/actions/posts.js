// Import everything as actions from /api
import * as api from '../api';

// Action creators = functions that return 'actions' (has type and payload)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // payload = all post data
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
