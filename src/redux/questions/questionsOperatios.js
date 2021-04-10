import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTheoreticalTests, getTechnicalTests } from 'services/API';
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

export default getQuestions;
