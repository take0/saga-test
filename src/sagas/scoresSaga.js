// sagas/scoresSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../apis/api';
import { getScoresSuccess, getScoresFailure } from '../actions';

function* handleRequest(action) {
    console.log("[saga] action.type is : " + action.type);
    const payload = yield call(api);
    console.log("[saga] payload.id : " + payload.id);
    console.log("[saga] payload.score : " + payload.score);
    // TODO : error 判定
    // 成功時
    yield put(getScoresSuccess());
    // 失敗時
    // TODO : 失敗時の処理
}

// 'GET_SCORES_REQUEST'アクションが呼ばれるごとに、handleRequestを実行。
const scoresSaga = [takeEvery('GET_SCORES_REQUEST', handleRequest)];
export default scoresSaga;
