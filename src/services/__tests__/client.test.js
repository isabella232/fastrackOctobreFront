import axios from 'axios';
import { dataSender, skillsReciever, partnerList, partnerReciever, filtredPartnerList, skillsSender } from '../client';

jest.mock('axios');

describe('client file', () => {
  it('should skillsReceiver receive the data', async () => {
    axios.get.mockResolvedValue({ data: { name: 'lorenzo' } });
    expect(await skillsReciever()).toStrictEqual({ name: 'lorenzo' });
  });

  it('should partnerList receive the data', async () => {
    axios.get.mockResolvedValue({ data: { test: 'coucou' } });
    expect(await partnerList()).toStrictEqual({ test: 'coucou' });
  });
});
