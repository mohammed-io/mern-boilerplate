import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import routes from '../routes';

// root
const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router routes={routes} history={history} />
      <DevTools />
    </div>
  </Provider>
)

// prop types
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

// export
export default Root;