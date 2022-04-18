import { applyMiddleware, combineReducers, createStore } from "redux";
import { groupReduser } from "./groupsReduser";
import { itemReduser } from "./itemReduser";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReduser = combineReducers({
    item: itemReduser,
    groups: groupReduser
})

export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher);