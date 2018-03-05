import allergySummaryReducers from '../src/allergy-summary/reducers';
import {
  LOAD_ALLERGY_SUMMARY,
  LOAD_ALLERGY_SUMMARY_SUCCEEDED,
  LOAD_ALLERGY_SUMMARY_FAILED,
} from '../src/allergy-summary/actions';

describe('allergySummary reducers', () => {
  it('should return the given state when action type is not recognized', () => {
    const initialState = { state: 'initial' };

    const result = allergySummaryReducers(initialState, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result).toBe(initialState);
  });

  it('should return the default state when the initial state is undefined', () => {
    const result = allergySummaryReducers(undefined, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result.allergySummary).toBeUndefined();
  });

  it('should return isLoading after a load action', () => {
    const result = allergySummaryReducers(undefined, { type: LOAD_ALLERGY_SUMMARY });

    expect(result).toEqual({
      isLoading: true,
      isFailed: false,
      allergySummary: undefined,
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a populated AllergySummary', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      allergySummary: undefined,
    };
    const result = allergySummaryReducers(startingState, {
      type: LOAD_ALLERGY_SUMMARY_SUCCEEDED,
      allergySummary: 'AllergySummary',
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      allergySummary: 'AllergySummary',
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a nonpopulated AllergySummary', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      allergySummary: undefined,
    };
    const result = allergySummaryReducers(startingState, {
      type: LOAD_ALLERGY_SUMMARY_SUCCEEDED,
      allergySummary: null,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      allergySummary: null,
    });
  });

  it('should return isLoading as false and isFailed as true after a load action fails', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      allergySummary: undefined,
    };
    const result = allergySummaryReducers(startingState, {
      type: LOAD_ALLERGY_SUMMARY_FAILED,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: true,
      allergySummary: undefined,
    });
  });
});
