import {
  LOAD_ALLERGY_SUMMARY,
  LOAD_ALLERGY_SUMMARY_SUCCEEDED,
  LOAD_ALLERGY_SUMMARY_FAILED,
} from './actions';

const allergySummaryReducers = (state = {
  isFailed: false,
  isLoading: true,
  allergySummary: undefined,
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_ALLERGY_SUMMARY:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;

    case LOAD_ALLERGY_SUMMARY_SUCCEEDED:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.allergySummary = action.allergySummary;
      return newState;

    case LOAD_ALLERGY_SUMMARY_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

export default allergySummaryReducers;
