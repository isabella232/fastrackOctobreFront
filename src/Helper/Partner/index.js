import { dataSender } from '../../services/client';

export const submitForm = (imageURL, currentPartner) => {
  const formData = new FormData();
  formData.append('image', imageURL);
  Object.keys(currentPartner).map((objectKey) => {
    formData.append(objectKey, currentPartner[objectKey]);
  });
  dataSender(formData);
  for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
};