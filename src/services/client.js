import axios from 'axios';
import ConvertToTime from '../Helper/ConvertToTime';

export const dataSender = async (formData) => {
  return axios({
    method: 'post',
    url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((response) => response.data);
};

export const skillsReciever = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/skill').then((res) => res.data);


export const partnerReciever = async (partnerId) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
  .then((res) => ({
    data: res.data,
    convertedTime: ConvertToTime(res.data.experience),
  }));

export const partnerList = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/partner')
  .then((res) => ({ data: res.data }));

export const filtredPartnerList = async (filter) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${filter}`)
  .then((res) => ({ data: res.data }));

export const skillsSender = (partner) => {
  axios({
    method: 'put',
    url: `https://fasttrack-octobre-back.herokuapp.com/api/partner/${partner.id}`,
    data: partner,
  });
};
