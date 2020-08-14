// reducers/scores.js

const initialState = { entries : [] };

export default function scores(state = initialState, action) {
    console.log("[reducer] action.type is : " + action.type);
    switch (action.type) {
        case 'GET_SCORES_REQUEST':
            // このアクションは saga によって処理されるので、ここでは何もしない。
            console.log("[reduser] GET_SCORES_REQUEST");
            return state;
        case 'GET_SCORES_SUCCESS':
            // TODO : API call 成功後の処理を行う
            console.log("[reduser] GET_SCORES_SUCCESS");
            // ひとまずべた書き
            return { entries : [{id: "77777", score: 777}]};
        case 'GET_SCORES_FAILURE':
            // TODO : API call 失敗時の処理を行う
            console.log("[reduser] GET_SCORES_FAILURE");
            return state;
        default:
            console.log("[reduser] DEFAULT");
            return state;
    }
}
