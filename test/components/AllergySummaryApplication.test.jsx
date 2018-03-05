import React from 'react';
import AllergySummaryApplication from '../../src/allergy-summary/components/AllergySummaryApplication';

it('should render a AllergySummaryApplication with a placeholder', () => {
  const testDummyService = {
    getAllergySummary: () => (
      new Promise((resolve) => {
        setTimeout(() => { resolve(); }, 1);
      })
    ),
  };

  const testView = shallow(<AllergySummaryApplication
    locale="en-US"
    patientId={100}
    service={testDummyService}
    translationsLoadingHeader="IonAllergiesEngine!!!!"
  />);
  expect(testView.first().shallow()).toMatchSnapshot();
});
