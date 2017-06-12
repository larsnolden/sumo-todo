import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

//Socket-IO middleware:
//  emit to server: dispatch('server/****')
//  receive from server: dipatches action with action.type specified in server.js 
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3003/')
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let middleware = [socketIoMiddleware, thunk];

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    applyMiddleware(
      ...middleware
    )
  )
}