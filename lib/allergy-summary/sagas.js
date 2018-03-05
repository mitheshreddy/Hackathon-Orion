'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllergySummary = undefined;

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchAllergySummary),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchAllergySummarySaga);

function fetchAllergySummary(action) {
  var allergySummary;
  return regeneratorRuntime.wrap(function fetchAllergySummary$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(action.data.service.getAllergySummary, action.data.patientId);

        case 3:
          allergySummary = _context.sent;
          _context.next = 6;
          return (0, _effects.put)({ type: _actions.LOAD_ALLERGY_SUMMARY_SUCCEEDED, allergySummary: allergySummary });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)({ type: _actions.LOAD_ALLERGY_SUMMARY_FAILED });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function fetchAllergySummarySaga() {
  return regeneratorRuntime.wrap(function fetchAllergySummarySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_actions.LOAD_ALLERGY_SUMMARY, fetchAllergySummary);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.fetchAllergySummary = fetchAllergySummary;
exports.default = [fetchAllergySummarySaga];