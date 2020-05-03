import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// in an action using async, await : 
// return { type: 'xyz', payload: 'xyz'} is not going to return an object
//
// In redux : action creators must return plain JS objs with a 'type' property and can have 'payload' property
// with reduc-thunk : action creator can also return functions
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // calling action creator inside an action creator
  await dispatch(fetchPosts());

  // by this step, posts will be available in state
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });