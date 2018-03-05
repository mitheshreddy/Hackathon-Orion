import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import allergySummaryService from '../src/allergy-summary/service';

describe('allergySummaryService', () => {
  it('should return the appropriate value on success', () => {
    const mockRequest = new MockAdapter(axios);
    mockRequest.onGet('/patients/1/allergy-summary', {
      headers: {
        Accept: 'application/json',
      },
    }).reply(200, {
      allergySummary: 'AllergySummary!',
    });

    return allergySummaryService.getAllergySummary(1).then(allergySummary => expect(allergySummary).toEqual('AllergySummary!'));
  });
});
