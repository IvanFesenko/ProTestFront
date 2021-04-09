import { createSlice } from '@reduxjs/toolkit';
import getQuestions from './questionsOperatios';

const initialState = {
  questions: [],
  currentQuestions: 0,
  typeTest: null,
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
      state.questions[state.currentQuestions] = {
        ...action.payload,
      };
    },
    setCurrentQuestions: (state, action) => {
      state.currentQuestions = action.payload;
    },

    setTypeTest: (state, action) => {
      state.typeTest = action.payload;
    },
  },
  extraReducers: {
    [getQuestions.fulfilled](state, action) {
      state.questions = [...action.payload];
    },
  },
});
export const { setAnswer, setCurrentQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
