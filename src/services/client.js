import axios from 'axios';
import ConvertToTime from '../Helper/ConvertToTime';

export const dataSender = (formData) => {
  axios({
    method: 'post',
    url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const skillsReciever = async () => axios.get('https://fasttrack-octobre-back.herokuapp.com/api/skill').then((res) => res.data);


export const partnerReciever = async (partnerId) => axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
  .then((res) => {
    return {
      data: res.data,
      convertedTime: ConvertToTime(res.data.experience),
    };
  });