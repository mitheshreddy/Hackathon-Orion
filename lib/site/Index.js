'use strict';

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AllergySummaryApplication = require('../allergy-summary/components/AllergySummaryApplication');

var _AllergySummaryApplication2 = _interopRequireDefault(_AllergySummaryApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var testDummyService = {
  getAllergySummary: function getAllergySummary() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('AllergySummary Rules');
      }, 2500);
    });
  }
};

_reactDom2.default.render(_react2.default.createElement(_AllergySummaryApplication2.default, {
  patientId: 100,
  locale: 'en-US',
  service: testDummyService,
  translationsLoadingHeader: 'AllergySummary'
}), document.getElementById('root'));