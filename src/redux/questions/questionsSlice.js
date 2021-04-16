import { createSlice } from '@reduxjs/toolkit';
import { getQuestions, sendAnswers } from './questionsOperatios';

const initialState = {
  questions: [],
  currentQuestion: 0,
  typeTest: null,
  result: null,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      // const temp = [...state.questions];
      // temp[state.currentQuestions] = {
      //   ...action.payload,
      // };
      //
      // state.questions = temp;
      state.questions[state.currentQuestion] = {
        ...action.payload,
      };
    },
    setCurrentQuestions: (state, action) => {
      state.currentQuestion = action.payload;
    },

    setTypeTest: (state, action) => {
      resetStore(state);
      state.typeTest = action.payload;
    },

    resetTestData: (state, _) => {
      resetStore(state);
    },

    resetCurrentTestData: (state, _) => {
      state.currentQuestion = 0;
      state.questions = [];
    },
  },
  extraReducers: {
    [getQuestions.fulfilled](state, action) {
      state.questions = [...action.payload];
    },
    [sendAnswers.fulfilled](state, action) {
      state.result = action.payload;
    },
  },
});

function resetStore(state) {
  state.currentQuestion = 0;
  state.questions = [];
  state.result = null;
}

export const {
  setAnswer,
  setCurrentQuestions,
  setTypeTest,
  resetTestData,
  resetCurrentTestData,
} = questionsSlice.actions;
export default questionsSlice.reducer;
