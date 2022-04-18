import { all } from "redux-saga/effects";
import { groupsWatcher } from "./groupsSaga";
import { itemWatcher } from "./itemSaga";

export function* rootWatcher() {
    yield all([groupsWatcher(), itemWatcher()])
}