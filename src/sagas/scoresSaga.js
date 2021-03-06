// sagas/scoresSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../apis/api';
import { getScoresSuccess, getScoresFailure } from '../actions';

function* handleRequest(action) {
    console.log("[saga] action.type is : " + action.type + ", action.limit is : " + action.limit);
    const {payload, error} = yield call(api, action.limit);

    if (payload && !error) {
        console.log("[saga] payload[0].id : " + payload[0].id);
        console.log("[saga] payload[0].score : " + payload[0].score);
        yield put(getScoresSuccess(payload));
    } else {
        yield put(getScoresFailure());
    }
}

// 'GET_SCORES_REQUEST'アクションが呼ばれるごとに、handleRequestを実行。
const scoresSaga = [takeEvery('GET_SCORES_REQUEST', handleRequest)];
export default scoresSaga;
