import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Socket-IO middleware:
//  emit to server: dispatch('server/****')
//  receive from server: dipatches action with action.type specified in server.js 
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import rootReducer from './rootReducer';

export let socket = io('https://larsnolden.com:3003');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let middleware = [socketIoMiddleware, thunk];

export default function configureStore(preloadedState) {
  if (preloadedState) preloadedState = { list: { ...preloadedState } }
  else preloadedState = { list: { todos: [] } }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        ...middleware
      )
    )
  )
}