import {
  LOAD_ALLERGY_SUMMARY,
  loadAllergySummary,
} from '../src/allergy-summary/actions';

function testDummyService() {
  return 'Test API';
}

describe('allergySummary actions', () => {
  it('should create an action to load the IonAllergiesEngine', () => {
    expect(loadAllergySummary(testDummyService, 100)).toEqual({
      type: LOAD_ALLERGY_SUMMARY,
      data: {
        service: testDummyService,
        patientId: 100,
      },
    });
  });
});
