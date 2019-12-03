import { dataSender } from '../../services/client';

const submitForm = (imageURL, currentPartner) => {
  const formData = new FormData();
  formData.append('image', imageURL);
  Object.keys(currentPartner).map((objectKey) => {
    formData.append(objectKey, currentPartner[objectKey]);
  });
  dataSender(formData);
  for (let pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
};

export default submitForm;
