import ReactOnRails from 'react-on-rails';
import '../src/allergy-summary/registration';

it('should register AllergySummaryApplication', () => {
  expect(ReactOnRails.getComponent('AllergySummaryApplication')).not.toBeUndefined();
});
