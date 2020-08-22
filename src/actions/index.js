// Action定義
export const GET_SCORES_REQUEST = "GET_SCORES_REQUEST";
export const GET_SCORES_SUCCESS = "GET_SCORES_SUCCESS";
export const GET_SCORES_FAILURE = "GET_SCORES_FAILURE";

// Action Creater(単なるメソッド。type必須。stateの更新を行う)
export const getScoresRequest = (inputParam) => ({
    type : GET_SCORES_REQUEST,
    limit : inputParam
});

export const getScoresSuccess = (returnedScores) => ({
    type : GET_SCORES_SUCCESS,
    payload: returnedScores
});

export const getScoresFailure = () => ({
    type : GET_SCORES_FAILURE
});