export const getQuestionsFromStore = state => {
  return state.questions.questions;
};

export const getQuestionsName = state => {
  return state.questions.typeTest;
};
