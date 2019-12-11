import axios from 'axios';

export const dataSender = (formData) => {
  axios({
    method: 'post',
    url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const skillsReciever = async () => {
  return axios.get('https://fasttrack-octobre-back.herokuapp.com/api/skill').then((res) => res.data);
};
