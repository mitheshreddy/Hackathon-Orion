import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_ALLERGY_SUMMARY,
  LOAD_ALLERGY_SUMMARY_SUCCEEDED,
  LOAD_ALLERGY_SUMMARY_FAILED,
} from './actions';

function* fetchAllergySummary(action) {
  try {
    const allergySummary = yield call(action.data.service.getAllergySummary, action.data.patientId);
    yield put({ type: LOAD_ALLERGY_SUMMARY_SUCCEEDED, allergySummary });
  } catch (e) {
    yield put({ type: LOAD_ALLERGY_SUMMARY_FAILED });
  }
}

function* fetchAllergySummarySaga() {
  yield takeLatest(LOAD_ALLERGY_SUMMARY, fetchAllergySummary);
}

export { fetchAllergySummary };
export default [fetchAllergySummarySaga];
