import { dataSender } from '../../services/client';

export const submitForm = (imageURL, currentPartner) => {
  const formData = new FormData();
  formData.append('image', imageURL);
  Object.keys(currentPartner).map((objectKey) => {
    formData.append(objectKey, currentPartner[objectKey]);
  });
  dataSender(formData);
};