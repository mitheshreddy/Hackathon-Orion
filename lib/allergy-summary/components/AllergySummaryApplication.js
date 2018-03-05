'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

var _terraClinicalApplication = require('terra-clinical-application');

var _terraClinicalApplication2 = _interopRequireDefault(_terraClinicalApplication);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraClinicalHeader = require('terra-clinical-header');

var _terraClinicalHeader2 = _interopRequireDefault(_terraClinicalHeader);

var _AllergySummaryContainer = require('./AllergySummaryContainer');

var _AllergySummaryContainer2 = _interopRequireDefault(_AllergySummaryContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sagaMiddleware = (0, _reduxSaga2.default)();

var store = (0, _redux.createStore)((0, _redux.combineReducers)(_AllergySummaryContainer.reducers), (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware)));

_AllergySummaryContainer.sagas.map(function (saga) {
  return sagaMiddleware.run(saga);
});

var propTypes = {
  app: _terraAppDelegate2.default.propType,
  locale: _propTypes2.default.string.isRequired,
  patientId: _propTypes2.default.number.isRequired,
  translationsLoadingHeader: _propTypes2.default.string.isRequired,
  service: _propTypes2.default.object
};

// The disabling here is due to React-on-Rails not allowing default props
// Anyone mimicking this top level component should make it a class so that
// they can handle default props in the future.
// eslint-disable-next-line react/prefer-stateless-function

var AllergySummaryApplication = function (_React$Component) {
  _inherits(AllergySummaryApplication, _React$Component);

  function AllergySummaryApplication() {
    _classCallCheck(this, AllergySummaryApplication);

    return _possibleConstructorReturn(this, (AllergySummaryApplication.__proto__ || Object.getPrototypeOf(AllergySummaryApplication)).apply(this, arguments));
  }

  _createClass(AllergySummaryApplication, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          app = _props.app,
          locale = _props.locale,
          patientId = _props.patientId,
          translationsLoadingHeader = _props.translationsLoadingHeader,
          service = _props.service;

      var translationsLoadingPlaceholder = _react2.default.createElement(_terraContentContainer2.default, { header: _react2.default.createElement(_terraClinicalHeader2.default, { title: translationsLoadingHeader }) });

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _terraClinicalApplication2.default,
          { locale: locale, app: app, translationsLoadingPlaceholder: translationsLoadingPlaceholder },
          _react2.default.createElement(_AllergySummaryContainer2.default, {
            patientId: patientId,
            service: service,
            key: 'ALLERGY_SUMMARY_APP'
          })
        )
      );
    }
  }]);

  return AllergySummaryApplication;
}(_react2.default.Component);

AllergySummaryApplication.propTypes = propTypes;

exports.default = AllergySummaryApplication;