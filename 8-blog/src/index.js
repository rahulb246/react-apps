import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// general data loading with redux : steps in sequence
//
// ---component gets renderered onto screen
//    |---component's 'componentDidMount' lifecycle method gets called
//        |---we call action creator from 'componentDidMount'
//            |---action creator runs code to make API request
//                |---API responds with data
//                    |---action creator returns an action with fetched data on 'payload' property
//                        |---some reducer sees the action, returns data off the 'payload'
//                            |---as we generated some new state obj, react/react-redux cause the React app to be rerendered
