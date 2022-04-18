import { takeEvery, put, call } from 'redux-saga/effects';
import { getGalleryItem } from '../api/galleryApi';
import { FETCH_ITEM, setItem } from '../store/itemReduser';


function* itemWorker(id) {
    const item = yield call(getGalleryItem(id));
    yield setTimeout(() => null, 500);
    yield put(setItem(setItem(item)));

}

export function* itemWatcher() {
    yield takeEvery(FETCH_ITEM, itemWorker)
}

