'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sagas = exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('../sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

var _AllergySummaryView = require('./AllergySummaryView');

var _AllergySummaryView2 = _interopRequireDefault(_AllergySummaryView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  allergySummary: _propTypes2.default.string,
  refreshAllergySummary: _propTypes2.default.func.isRequired,
  isLoading: _propTypes2.default.bool,
  isFailed: _propTypes2.default.bool
};

var AllergySummaryContainer = function (_React$Component) {
  _inherits(AllergySummaryContainer, _React$Component);

  function AllergySummaryContainer() {
    _classCallCheck(this, AllergySummaryContainer);

    return _possibleConstructorReturn(this, (AllergySummaryContainer.__proto__ || Object.getPrototypeOf(AllergySummaryContainer)).apply(this, arguments));
  }

  _createClass(AllergySummaryContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('orionReactComponentRefresh', this.props.refreshAllergySummary);
      this.props.refreshAllergySummary();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('orionReactComponentRefresh', this.props.refreshAllergySummary);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFailed = _props.isFailed,
          isLoading = _props.isLoading,
          allergySummary = _props.allergySummary;

      return _react2.default.createElement(_AllergySummaryView2.default, { isFailed: isFailed, isLoading: isLoading, text: allergySummary });
    }
  }]);

  return AllergySummaryContainer;
}(_react2.default.Component);

AllergySummaryContainer.propTypes = propTypes;

var mapStateToProps = function mapStateToProps(state) {
  return {
    allergySummary: state.allergySummaryState.allergySummary,
    isLoading: state.allergySummaryState.isLoading,
    isFailed: state.allergySummaryState.isFailed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    refreshAllergySummary: function refreshAllergySummary() {
      dispatch((0, _actions.loadAllergySummary)(ownProps.service || _service2.default, ownProps.patientId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AllergySummaryContainer);


var reducers = _extends({}, { allergySummaryState: _reducers2.default });
exports.reducers = reducers;


var sagas = _sagas2.default;
exports.sagas = sagas;