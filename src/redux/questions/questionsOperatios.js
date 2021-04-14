import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getTheoreticalTests,
  getTechnicalTests,
  sendAnswersTechnical,
  sendAnswersTheoretical,
} from 'services/API';
import typeTest from 'services/variables';
import { orange, grey } from 'assets/colors';

const getQuestions = createAsyncThunk(
  'question/get',
  async (requestData, { rejectedWithValue }) => {
    try {
      let response;
      switch (requestData) {
        case typeTest.tech:
          response = await getTechnicalTests();
          break;
        case typeTest.theor:
          response = await getTheoreticalTests();
          break;

        default:
          console.log('хватит читерить');
      }

      return response;
    } catch (e) {
      return rejectedWithValue(e);
    }
  },
);

const sendAnswers = createAsyncThunk(
  'questions/sendAnswer',
  async ({ results: answerData, typeTest: type }, { rejectedWithValue }) => {
    try {
      let response;
      switch (type) {
        case typeTest.tech:
          response = await sendAnswersTechnical(answerData);
          break;
        case typeTest.theor:
          response = await sendAnswersTheoretical(answerData);
          break;

        default:
          console.log('хватит читерить');
      }
      const correct = response.filter(question => {
        return question.userAnswerIs;
      }).length;
      const incorrect = response.length - correct;

      return {
        chart: [
          { value: correct, label: 'Correct', color: orange },
          { value: incorrect, label: 'Incorrect', color: grey },
        ],
        title: 'Not bad',
        description: 'But you still need to learn some materials.',
      };
    } catch (e) {
      return rejectedWithValue(e);
    }
  },
);

export { getQuestions, sendAnswers };
