// sagas/scoresSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../apis/api';
import { scores } from '../actions';

function* handleRequest(action) {
    console.log("[saga] action.type is : " + action.type);
}

// 'SCORES'アクションが呼ばれるごとに、handleRequestを実行。
const scoresSaga = [takeEvery('SCORES', handleRequest)];
export default scoresSaga;
