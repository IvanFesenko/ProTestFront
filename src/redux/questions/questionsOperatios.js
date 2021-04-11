import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getTheoreticalTests,
  getTechnicalTests,
  sendAnswersTechnical,
  sendAnswersTheoretical,
} from 'services/API';
import typeTest from 'services/variables';

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
      return response;
    } catch (e) {
      return rejectedWithValue(e);
    }
  },
);

export { getQuestions, sendAnswers };
