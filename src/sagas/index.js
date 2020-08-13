import { all } from 'redux-saga/effects';
import scoresSaga from './scoresSaga';

export default function* rootSaga() {
    yield all([
        ...scoresSaga,
    ]);
}
