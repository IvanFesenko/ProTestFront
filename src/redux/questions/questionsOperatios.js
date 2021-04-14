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
      let title;
      let description;
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
      if (correct === 0) {
        title = 'Dnishe ibanoe';
        description = 'QA ne tvoe bro';
      } else if (correct > 0 && correct < 6) {
        title = 'Po4ti Dnishe ibanoe';
        description = 'Tu podumaj tvoe li eto';
      } else if (correct >= 6 && correct < 9) {
        title = 'Ni huyovo';
        description = 'Nugno eshe po4itat`';
      } else if (correct >= 9 && correct < 12) {
        title = 'Midlovkie pogonu';
        description = 'Malec priznaet';
      } else {
        title = 'Bogina';
        description = 'zp 3k$ tvoja';
      }
      return {
        chart: [
          { value: correct, label: 'Correct', color: orange },
          { value: incorrect, label: 'Incorrect', color: grey },
        ],
        results: {
          correct_answers: correct,
          total_questions: response.length,
        },
        type,
        title,
        description,
      };
    } catch (e) {
      return rejectedWithValue(e);
    }
  },
);

export { getQuestions, sendAnswers };
