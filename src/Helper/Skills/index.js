import { skillsReciever } from '../../services/client';

const convertSkills = () => skillsReciever().then((data) => {
  const formatedSkills = { categories: [], skills: {} };
  // eslint-disable-next-line array-callback-return
  data.map((res) => {
    formatedSkills.categories.push({
      id: res.id,
      name: res.name,
      subCategories: res.subCategory.map((subCategorie) => {
        formatedSkills.skills[subCategorie.name] = subCategorie.skills;
        return {
          id: subCategorie.id,
          name: subCategorie.name,
        };
      }),
    });
    formatedSkills.skills[res.name] = res.skills;
  });
  return formatedSkills;
});

export default convertSkills;
