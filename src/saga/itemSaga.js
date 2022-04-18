import { takeEvery, put, call } from 'redux-saga/effects';
import { getGalleryItem } from '../api/galleryApi';
import { FETCH_ITEM, setItem } from '../store/itemReduser';
import { delay } from './groupsSaga';


function* itemWorker({payload}) {
    const item = yield call(getGalleryItem(payload));
    yield delay(500);
    yield put(setItem(item));

}

export function* itemWatcher() {
    yield takeEvery(FETCH_ITEM, itemWorker)
}

