import axios from 'axios';
import ConvertToTime from '../Helper/ConvertToTime';
import { getToken } from '../Helper/Partner/localStorage';
import { baseUrl } from './configs/genralsConfigs';

export const dataSender = (formData) => axios({
  method: 'post',
  url: `${baseUrl}/partner`,
  data: formData,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${getToken()}`,
  },
});

export const sendAuth = (data) => axios({
  method: 'post',
  url: `${baseUrl}/login`,
  data,
}).then((token) => token.data);

export const skillsReciever = () => axios.get(`${baseUrl}/skill`,
  {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => res.data)
  .catch(() => {
    localStorage.removeItem('token');
    window.location.assign('https://fasttrack-octobre-front.herokuapp.com/login');
  });

export const partnerReciever = (partnerId) => axios.get(`${baseUrl}/partner/${partnerId}`,
  {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  .then((res) => ({
    data: res.data,
    convertedTime: ConvertToTime(res.data.experience),
  }))
  .catch(() => {
    localStorage.removeItem('token');
    window.location.assign('https://fasttrack-octobre-front.herokuapp.com/login');
  });

export const partnerList = () => axios.get(`${baseUrl}/partner`,
  {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  .then((res) => ({ data: res.data }))
  .catch(() => {
    localStorage.removeItem('token');
    window.location.assign('https://fasttrack-octobre-front.herokuapp.com/login');
  });

export const filtredPartnerList = (filter) => axios.get(`${baseUrl}/partner/${filter}`,
  {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  .then((res) => ({ data: res.data })).catch(() => {
    localStorage.removeItem('token');
  });

export const skillsSender = (partner) => {
  axios({
    method: 'put',
    url: `${baseUrl}/partner/${partner.id}`,
    data: partner,
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
