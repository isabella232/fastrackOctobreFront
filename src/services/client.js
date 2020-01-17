import axios from 'axios';
import ConvertToTime from '../Helper/ConvertToTime';
import { getToken } from '../Helper/Partner/localStorage'

export const dataSender = async (formData) => {
  return axios({
    method: 'post',
    url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `bearer ${getToken}`,
    },
  }).then((response) => response.data).catch(() => {
    localStorage.removeItem('token');
  });
};

export const skillsReciever = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/skill',
  {
    headers: {
      Authorization: `bearer ${getToken}`,
    },
  }).then((res) => res.data).catch(() => {
  localStorage.removeItem('token');
});


export const partnerReciever = async (partnerId) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`,
  {
    headers: {
      Authorization: `bearer ${getToken}`,
    },
  }).then((res) => ({
  data: res.data,
  convertedTime: ConvertToTime(res.data.experience),
})).catch(() => {
  localStorage.removeItem('token');
});;

export const partnerList = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/partner',
  {
    headers: {
      Authorization: `bearer ${getToken}`,
    },
  })
  .then((res) => ({ data: res.data })).catch(() => {
    localStorage.removeItem('token');
  });

export const filtredPartnerList = async (filter) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${filter}`,
  {
    headers: {
      Authorization: `bearer ${getToken}`,
    },
  })
  .then((res) => ({ data: res.data })).catch(() => {
    localStorage.removeItem('token');
  });

export const skillsSender = (partner) => {
  axios({
    method: 'put',
    url: `https://fasttrack-octobre-back.herokuapp.com/api/partner/${partner.id}`,
    data: partner,
    headers: { Authorization: `bearer ${getToken}` },
  }).catch(() => {
    localStorage.removeItem('token');
  });
};
