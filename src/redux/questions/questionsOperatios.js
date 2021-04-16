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
      let points;
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
        points = 1;
        title = 'WTF?';
        description = 'You should looking another kind of job';
      } else if (correct > 0 && correct < 6) {
        points = 2;
        title = 'To sad';
        description = 'Your result make me cry';
      } else if (correct >= 6 && correct < 9) {
        points = 3;
        title = 'Cool';
        description = 'I like your knowledge';
      } else if (correct >= 9 && correct < 12) {
        points = 4;
        title = 'Not bad';
        description = 'But you still need to learn some materials.';
      } else {
        points = 5;
        title = 'Wow';
        description = "It's amazing. Could you get same result again?";
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
        points,
      };
    } catch (e) {
      return rejectedWithValue(e);
    }
  },
);

export { getQuestions, sendAnswers };
