import { takeEvery, put, call } from 'redux-saga/effects';
import { getGalleryGroups } from '../api/galleryApi';
import { FETCH_GROUPS, setGroups } from '../store/groupsReduser';

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* groupsWorker() {
    const groups = yield call(getGalleryGroups);
    yield delay(500);
    yield put(setGroups(groups))
}

export function* groupsWatcher() {
    yield takeEvery(FETCH_GROUPS, groupsWorker)
}

