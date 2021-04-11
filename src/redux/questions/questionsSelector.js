export const getQuestionsFromStore = state => {
  return state.questions.questions;
};

export const getQuestionsName = state => {
  return state.questions.typeTest;
};

export const getQuestionNumber = state => {
  return state.questions.currentQuestion;
};
