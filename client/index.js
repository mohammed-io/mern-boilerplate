import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers/index';
import routes from './routes';


// integrate new versions of modules, like react-router-dom (RR4)
// port RR to RN when building mobile - EXPERIMENTAL

// // redux middleware
const store = createStore(reducers);

// render
render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);