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

  it('should partnerReciever receive the data', async () => {
    axios.get.mockResolvedValue(
      { data: { name: 'lorenzo', experience: '50' } },
    );
    expect(await partnerReciever()).toStrictEqual(
      {
        convertedTime: { months: 2, years: 4 },
        data: { name: 'lorenzo', experience: '50' },
      },
    );
  });

  it('should filtredPartnerList receive the data', async () => {
    axios.get.mockResolvedValue({ data: { name: 'lorenzo' } });
    expect(await filtredPartnerList()).toStrictEqual({ name: 'lorenzo' });
  });

  it('should dataSender send the data', async () => {
    const formData = {};
    await dataSender(formData);
    expect(axios).toHaveBeenCalledWith({
      method: 'post', url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner', data: formData, headers: { 'Content-Type': 'multipart/form-data' },
    });
  });
});
