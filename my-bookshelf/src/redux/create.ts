import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  // @ts-ignore
  const store = createStore(
    reducer(history),
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
