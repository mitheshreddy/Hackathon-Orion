'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var allergySummaryReducers = function allergySummaryReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFailed: false,
    isLoading: true,
    allergySummary: undefined
  };
  var action = arguments[1];

  var newState = _extends({}, state);

  switch (action.type) {
    case _actions.LOAD_ALLERGY_SUMMARY:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;

    case _actions.LOAD_ALLERGY_SUMMARY_SUCCEEDED:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.allergySummary = action.allergySummary;
      return newState;

    case _actions.LOAD_ALLERGY_SUMMARY_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

exports.default = allergySummaryReducers;