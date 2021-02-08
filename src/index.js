import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import transport from './store/reducers/transport_reducer';
import transportinput from './store/reducers/transport_input_reducer';
import guide from './store/reducers/guide_input_reducer'
import onlineStoreApp from './../src/store/lib/reducers';
import authReducer from './store/reducers/auth';
import event from '../src/store/event-userpnl/eventReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    transport_reducer: transport,
      onlineStoreApp:onlineStoreApp,
        transport_input_reducer:transportinput,
    guide_input_reducer:guide,
    auth: authReducer,
    eventpnl:event
});


const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

 // const store = createStore(onlineStoreApp)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
