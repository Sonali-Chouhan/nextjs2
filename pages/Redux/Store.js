import { legacy_createStore,applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootreducer from "./Reducer/index";
import Saga1 from "./Saga/Saga1"
import { createWrapper } from "next-redux-wrapper";
const sagaMiddleware=createSagaMiddleware();
export const store=legacy_createStore(
    rootreducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(Saga1)
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);