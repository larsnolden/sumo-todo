import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './rootReducer';

//Socket IO Middleware
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3003/')
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export default function configureStore(preloadedState) {
  return createStore(
    //rootReducer,
    applyMiddleware(
      socketIoMiddleware, thunk
    )
  )
}
