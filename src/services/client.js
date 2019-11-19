import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getPartner = () => {
  axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
    .then((res) => {
      const { data } = res;
      return data;
    });
};
