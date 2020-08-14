// reducers/scores.js

const initialState = {};

export default function scores(state = initialState, action) {
    console.log("[reducer] action.type is : " + action.type);
    switch (action.type) {
        case 'GET_SCORES_REQUEST':
            // TODO: 本当は引数の state を変更するようなコードは
            // reducer のルール上良くない。
            console.log("[reduser] GET_SCORES_REQUEST");
//            state = action.payload; // この行が悪さをしていた。
// 単に action.payload を定義していないので、state に undefined が代入されていた。
            return state;
        default:
            console.log("[reduser] DEFAULT");
            return state;
    }
}
