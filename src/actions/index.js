// Action定義
export const SCORES = "SCORES";

// Action Creater(単なるメソッド。type必須。stateの更新を行う)
export const scores = () => ({
    type : SCORES
});
