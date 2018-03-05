/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import AllergySummaryContainer from '../../src/allergy-summary/components/AllergySummaryContainer';
import { LOAD_ALLERGY_SUMMARY } from '../../src/allergy-summary/actions';

it('should render a AllergySummaryContainer with a populated AllergySummary', () => {
  const testContainer = shallowWithStore(
    <AllergySummaryContainer />,
    createMockStore({
      allergySummaryState: {
        allergySummary: 'AllergySummary',
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummaryContainer with a nonpopulated AllergySummary', () => {
  const testContainer = shallowWithStore(
    <AllergySummaryContainer />,
    createMockStore({
      allergySummaryState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummaryContainer with IonAllergiesEngine loading', () => {
  const testContainer = shallowWithStore(
    <AllergySummaryContainer />,
    createMockStore({
      allergySummaryState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummary container with a IonAllergiesEngine failed', () => {
  const testContainer = shallowWithStore(
    <AllergySummaryContainer />,
    createMockStore({
      allergySummaryState: {
        isFailed: true,
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should call the dispatch method', () => {
  const testStore = createMockStore({
    allergySummaryState: {
    },
  });
  const testContainer = shallowWithStore(
    <AllergySummaryContainer patientId={100} />,
    testStore,
  );

  testContainer.props().refreshAllergySummary();
  expect(testStore.isActionTypeDispatched(LOAD_ALLERGY_SUMMARY)).toBe(true);
});
