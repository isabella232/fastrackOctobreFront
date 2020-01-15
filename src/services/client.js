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
      Authorization: getToken,
    },
  }).then((response) => response.data).catch(() => {
    localStorage.clear();
  });
};

export const skillsReciever = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/skill',
  {
    headers: {
      Authorization: getToken,
    },
  }).then((res) => res.data).catch(() => {
  localStorage.clear();
});


export const partnerReciever = async (partnerId) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`,
  {
    headers: {
      Authorization: getToken,
    },
  }).then((res) => ({
  data: res.data,
  convertedTime: ConvertToTime(res.data.experience),
})).catch(() => {
  localStorage.clear();
});;

export const partnerList = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/partner',
  {
    headers: {
      Authorization: getToken,
    },
  })
  .then((res) => ({ data: res.data })).catch(() => {
    localStorage.clear();
  });

export const filtredPartnerList = async (filter) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${filter}`,
  {
    headers: {
      Authorization: getToken,
    },
  })
  .then((res) => ({ data: res.data })).catch(() => {
    localStorage.clear();
  });

export const skillsSender = (partner) => {
  axios({
    method: 'put',
    url: `https://fasttrack-octobre-back.herokuapp.com/api/partner/${partner.id}`,
    data: partner,
    headers: { Authorization: getToken },
  }).catch(() => {
    localStorage.clear();
  });
};
