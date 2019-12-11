import { skillsReciever } from '../../services/client';

const convertSkills = () => skillsReciever().then((data) => {
  const formatedSkills = { categories: [], skills: {} };
  data.map((res) => {
    formatedSkills.categories.push({
      id: res.id,
      name: res.name,
      subCategories: res.subCategories.map((subCategorie) => {
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
