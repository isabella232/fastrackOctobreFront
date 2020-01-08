import { dataSender } from '../../services/client';

const submitForm = async (imageURL, currentPartner) => {
  const formData = new FormData();
  await formData.append('avatar', imageURL);
  await Object.keys(currentPartner).map((objectKey) => formData.append(objectKey, currentPartner[objectKey]));
  return dataSender(formData).then((res) => res);
};

export default submitForm;
