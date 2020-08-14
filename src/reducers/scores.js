// reducers/scores.js

const initialState = { entries : [] };

export default function scores(state = initialState, action) {
    console.log("[reducer] action.type is : " + action.type);
    switch (action.type) {
        case 'GET_SCORES_REQUEST':
            // このアクションは saga によって処理してもらうので、ここでは何もしない。
            console.log("[reduser] GET_SCORES_REQUEST");
            return state;
        case 'GET_SCORES_SUCCESS':
            console.log("[reduser] GET_SCORES_SUCCESS");
            console.log("returnedScores[0].id : " + action.payload[0].id);
            // API から得た結果 (json形式の action.payload) を reducer に送る。
            return { entries : action.payload };
            // TODO : API が予測しない形式の結果を返した場合のエラー処理
        case 'GET_SCORES_FAILURE':
            // TODO : API call 失敗時の処理を行う
            console.log("[reduser] GET_SCORES_FAILURE");
            return state;
        default:
            console.log("[reduser] DEFAULT");
            return state;
    }
}
