// Action定義
export const GET_SCORES_REQUEST = "GET_SCORES_REQUEST";
export const GET_SCORES_SUCCESS = "GET_SCORES_SUCCESS";
export const GET_SCORES_FAILURE = "GET_SCORES_FAILURE";

// Action Creater(単なるメソッド。type必須。stateの更新を行う)
export const getScoresRequest = () => ({
    type : GET_SCORES_REQUEST
});

export const getScoresSuccess = () => ({
    type : GET_SCORES_SUCCESS
});

export const getScoresFailure = () => ({
    type : GET_SCORES_FAILURE
});