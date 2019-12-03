import axios from 'axios';
import data from './ProvisionalDatasSkills.json';

export const dataSender = (formData) => {
  axios({
    method: 'post',
    url: 'https://fasttrack-octobre-back.herokuapp.com/api/partner',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const skillsReciever = async () => {
  
  return data;

  /*axios.get(result)
    .then = (res) => {
      console.log('LE RES', res);
      const { data } = res;
      return data;
    };*/
};
