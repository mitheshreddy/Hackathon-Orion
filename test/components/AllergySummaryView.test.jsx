import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import AllergySummaryView from '../../src/allergy-summary/components/AllergySummaryView';

loadTranslation('../translations/en-US.json');

it('should render a AllergySummaryView with no data', () => {
  const allergySummaryView = shallowWithIntl(<AllergySummaryView />);
  expect(allergySummaryView.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummaryView that has failed', () => {
  const allergySummaryView = shallowWithIntl(<AllergySummaryView isFailed />);
  expect(allergySummaryView.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummaryView view that is loading', () => {
  const allergySummaryView = shallowWithIntl(<AllergySummaryView />);
  expect(allergySummaryView.first().shallow()).toMatchSnapshot();
});

it('should render a AllergySummaryView that has succeeded with a valid IonAllergiesEngine', () => {
  const allergySummaryView = shallowWithIntl(<AllergySummaryView text="AllergySummary" />);
  expect(allergySummaryView.first().shallow()).toMatchSnapshot();
});
