import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTheoreticalTests, getTechnicalTests } from 'services/API';
import nameTest from 'services/variables';

const getQuestions = createAsyncThunk(
  'question/get',
  async (requestData, { rejectedWithValue }) => {
    try {
      let response;
      switch (requestData) {
        case nameTest.teh:
          response = await getTechnicalTests();
          break;
        case nameTest.theor:
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
