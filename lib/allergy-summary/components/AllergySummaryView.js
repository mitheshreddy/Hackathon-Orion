'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraClinicalItemView = require('terra-clinical-item-view');

var _terraClinicalItemView2 = _interopRequireDefault(_terraClinicalItemView);

var _terraClinicalHeader = require('terra-clinical-header');

var _terraClinicalHeader2 = _interopRequireDefault(_terraClinicalHeader);

var _terraClinicalErrorView = require('terra-clinical-error-view');

var _terraClinicalErrorView2 = _interopRequireDefault(_terraClinicalErrorView);

var _terraClinicalNoDataView = require('terra-clinical-no-data-view');

var _terraClinicalNoDataView2 = _interopRequireDefault(_terraClinicalNoDataView);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string,
  isLoading: _propTypes2.default.bool,
  isFailed: _propTypes2.default.bool,
  intl: _propTypes2.default.object.isRequired
};

var AllergySummaryView = function AllergySummaryView(props) {
  var isLoading = props.isLoading,
      isFailed = props.isFailed,
      text = props.text,
      intl = props.intl;

  var content = void 0;

  if (isLoading) {
    content = null;
  } else if (isFailed) {
    content = _react2.default.createElement(_terraClinicalErrorView2.default, { description: intl.formatMessage({ id: 'ion-allergies-engine.allergy-summary-failed-to-load' }), isGlyphHidden: true });
  } else if (text && text.length > 0) {
    content = _react2.default.createElement(_terraClinicalItemView2.default, { displays: [_react2.default.createElement(_terraClinicalItemView2.default.Display, { text: text })] });
  } else {
    content = _react2.default.createElement(_terraClinicalNoDataView2.default, { heading: intl.formatMessage({ id: 'ion-allergies-engine.no-allergy-summary' }), isGlyphHidden: true });
  }

  return _react2.default.createElement(
    _terraContentContainer2.default,
    { header: _react2.default.createElement(_terraClinicalHeader2.default, { title: intl.formatMessage({ id: 'ion-allergies-engine.allergy-summary' }) }) },
    _react2.default.createElement(_terraButton2.default, { text: 'Button Sample' }),
    content
  );
};

AllergySummaryView.propTypes = propTypes;

exports.default = (0, _reactIntl.injectIntl)(AllergySummaryView);