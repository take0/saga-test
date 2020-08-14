// sagas/scoresSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../apis/api';
import { getScoresSuccess, getScoresFailure } from '../actions';

function* handleRequest(action) {
    console.log("[saga] action.type is : " + action.type);
    const {payload, error} = yield call(api);

    if (payload && !error) {
        console.log("[saga] payload.id : " + payload.id);
        console.log("[saga] payload.score : " + payload.score);
        yield put(getScoresSuccess());
    } else {
        yield put(getScoresFailure());
    }
}

// 'GET_SCORES_REQUEST'アクションが呼ばれるごとに、handleRequestを実行。
const scoresSaga = [takeEvery('GET_SCORES_REQUEST', handleRequest)];
export default scoresSaga;
