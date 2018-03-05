/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import AllergySummaryApplication from '../allergy-summary/components/AllergySummaryApplication';

const testDummyService = {
  getAllergySummary: () => (
    new Promise((resolve) => {
      setTimeout(() => { resolve('AllergySummary Rules'); }, 2500);
    })
  ),
};

ReactDOM.render(
  <AllergySummaryApplication
    patientId={100}
    locale="en-US"
    service={null}
    translationsLoadingHeader="AllergySummary"
  />, document.getElementById('root'));

// ReactDOM.render(
//   <AllergySummaryApplication
//     patientId={100}
//     locale="en-US"
//     service={null}
//     translationsLoadingHeader="AllergySummary"
//   />, document.getElementById('root'));
