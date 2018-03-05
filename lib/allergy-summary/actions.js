'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAllergySummary = loadAllergySummary;
var LOAD_ALLERGY_SUMMARY = exports.LOAD_ALLERGY_SUMMARY = 'LOAD_ALLERGY_SUMMARY';
var LOAD_ALLERGY_SUMMARY_SUCCEEDED = exports.LOAD_ALLERGY_SUMMARY_SUCCEEDED = 'LOAD_ALLERGY_SUMMARY_SUCCEEDED';
var LOAD_ALLERGY_SUMMARY_FAILED = exports.LOAD_ALLERGY_SUMMARY_FAILED = 'LOAD_ALLERGY_SUMMARY_FAILED';

function loadAllergySummary(service, patientId) {
  return {
    type: LOAD_ALLERGY_SUMMARY,
    data: {
      service: service,
      patientId: patientId
    }
  };
}