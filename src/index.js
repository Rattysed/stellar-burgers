import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { thunk } from 'redux-thunk';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './services/reducers/index';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();