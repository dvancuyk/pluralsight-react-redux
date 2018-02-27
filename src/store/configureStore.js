import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduceImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduceImmutableStateInvariant())
  );
}
