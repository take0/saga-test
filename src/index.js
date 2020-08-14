import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import * as serviceWorker from './serviceWorker';

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware();

// Saga を Store にマウントする。
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Saga を起動する。
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log("store", store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
