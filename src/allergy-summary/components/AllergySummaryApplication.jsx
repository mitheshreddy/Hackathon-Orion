import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppDelegate from 'terra-app-delegate';
import Application from 'terra-clinical-application';
import ContentContainer from 'terra-content-container';
import Header from 'terra-clinical-header';

import AllergySummaryContainer, { reducers, sagas } from './AllergySummaryContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(sagaMiddleware)),
);

sagas.map(saga => (sagaMiddleware.run(saga)));

const propTypes = {
  app: AppDelegate.propType,
  locale: PropTypes.string.isRequired,
  patientId: PropTypes.number.isRequired,
  translationsLoadingHeader: PropTypes.string.isRequired,
  service: PropTypes.object,
};

// The disabling here is due to React-on-Rails not allowing default props
// Anyone mimicking this top level component should make it a class so that
// they can handle default props in the future.
// eslint-disable-next-line react/prefer-stateless-function
class AllergySummaryApplication extends React.Component {
  render() {
    const { app, locale, patientId, translationsLoadingHeader, service } = this.props;
    const translationsLoadingPlaceholder = (
      <ContentContainer header={<Header title={translationsLoadingHeader} />} />
    );

    return (
      <Provider store={store}>
        <Application locale={locale} app={app} translationsLoadingPlaceholder={translationsLoadingPlaceholder}>
          <AllergySummaryContainer
            patientId={patientId}
            service={service}
            key={'ALLERGY_SUMMARY_APP'}
          />
        </Application>
      </Provider>
    );
  }
}

AllergySummaryApplication.propTypes = propTypes;

export default AllergySummaryApplication;
