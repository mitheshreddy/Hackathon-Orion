import allergySummarySagas, { fetchAllergySummary } from '../src/allergy-summary/sagas';

import {
  LOAD_ALLERGY_SUMMARY,
  LOAD_ALLERGY_SUMMARY_FAILED,
  LOAD_ALLERGY_SUMMARY_SUCCEEDED,
} from '../src/allergy-summary/actions';

function testDummyService() {
  return 'test';
}

describe('allergySummary sagas', () => {
  it('should return the IonAllergiesEngine given an action', () => {
    const action = {
      type: LOAD_ALLERGY_SUMMARY,
      data: {
        service: { getAllergySummary: testDummyService },
        patientId: 100,
      },
    };

    const testLoad = fetchAllergySummary(action);
    testLoad.next(action);

    const result = testLoad.next('test');
    expect(result.value.PUT.action).toEqual({ allergySummary: 'test', type: LOAD_ALLERGY_SUMMARY_SUCCEEDED });
  });

  it('should return failed given an invalid action', () => {
    const result = fetchAllergySummary({}).next();
    expect(result.value.PUT.action).toEqual({ type: LOAD_ALLERGY_SUMMARY_FAILED });
  });

  it('should return latest saga', () => {
    const result = allergySummarySagas[0]({}).next({});
    expect(result.value.FORK.args).toEqual([LOAD_ALLERGY_SUMMARY, fetchAllergySummary]);
  });
});
