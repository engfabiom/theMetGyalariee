import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = applyMiddleware(promise, logger); // logger
const store = createStore(rootReducer, middleware);

export default store;
