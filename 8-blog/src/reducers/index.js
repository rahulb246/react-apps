import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

// rules of reducers :
// - must return any values(including 'null') besides 'undefined'(when empty func or return undefined)
// - produces 'state', or data to be used inside of your app using only previous state and action
//   reducers 2 arguments : (previous state, action), everytime reducer gets called : gets called with previous state & action obj
// - must not return reach 'out of itself' to decide what value to return (reducers are pure)
//   no API req, no DOM reaching, no file reading, .....
//   only return based on some computation on state & action objs
// - must not mutate its input 'state' argument 
//   we can actually return, but if we return same state obj which is mutated,
//   oldState === newState will be true, this comparision is used in redux library to check is state is changed to re-render component
//   Ex : a = {a: '1'}  // a is {a: '1'} 
//        a === a       
//        true
//        a.a = "2"     // a is now {a: '2'} 
//        a === a       // compares if arrays & obj's are referencing same memory, not values
//        true
// => which means always try to return new state objs if state changes are there